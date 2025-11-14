<!--
 * @Author: lijin
 * @Description: 
 * @Date: 2024-07-24 16:03:03
 * @LastEditTime: 2024-10-09 19:10:54
 * @FilePath: \wide-sale-ui\src\components\form\FileUpload.vue
-->

<!-- 组件属性
-------v-modal--------
fileList(<Array>文件列表)
 * fileList.f_id：标识ID
 * fileList.f_file_name: 文件名
 * fileList.f_file_url: 网址

-------props----------
fileInfo(<Object>文件信息)
 * fileInfo.path: 页面路径
 * fileInfo.f_file_type: 文件类型标识

fileType(<string>文件类型)
 * 'image': 图片,
 * 'document': 文档，
 * 'file': 图片 + 文档

multiple(<boolean>是否多选)
  
editable(<boolean>是否可编辑)

hoverTip(<boolean>是否鼠标悬浮状态才显示上传类型提示, 默认值为false)
-->
<template>
  <a-upload
    class="upload"
    :multiple="multiple"
    v-model:fileList="formatFileList"
    :beforeUpload="beforeUpload"
    :listType="listType"
    :showUploadList="{ showRemoveIcon: editable }"
    @remove="handleRemoveFile"
    :accept="accept"
  >
    <div class="hl-vb" v-if="editable">
      <a-tooltip placement="bottomLeft" :title="hoverTip ? `请上传 ${accept} 文件` : undefined">
        <a-button :loading="uploading.isUpload" :disabled="uploading.isUpload">
          <template #icon><UploadOutlined /></template>
          上传附件
        </a-button>
      </a-tooltip>
      <div class="upload-tip" v-if="!hoverTip">请上传 {{ accept }} 文件</div>
    </div>
    <div class="empty-tip" v-if="!editable && formatFileList.length === 0" @click.stop>未上传附件</div>
    <template #itemRender="{ file, actions }" v-if="fileType !== 'image'">
      <a-space :size="6">
        <component :is="getTypeIcon(file)" />
        <span
          :class="{ 'item-title': true, 'preview-title': getIfSuffixPreview(file) }"
          @click="(...param) => (getIfSuffixPreview(file) ? actions.download(...param) : undefined)"
          >{{ file.name }}</span
        >
        <a-space :size="10">
          <download-outlined class="link" @click="handleDownload(file)" />
          <delete-outlined class="color-red" @click="actions.remove" v-if="editable" />
        </a-space>
      </a-space>
    </template>
  </a-upload>
</template>

<script setup>
import {
  FileOutlined,
  FileImageOutlined,
  FilePdfOutlined,
  FileWordOutlined,
  FileExcelOutlined
} from "@ant-design/icons-vue";
import { ref, h } from "vue";
import { useRequestData } from "@/composables/requestData";
import AppUtil from "@/utils/AppUtil";
import { Upload } from "ant-design-vue";
import axios from "axios";
const { doRequestFile, doRequest } = useRequestData();

const props = defineProps({
  fileList: {
    type: Array,
    default() {
      return [];
    },
    required: true
  },
  fileInfo: {
    type: Object,
    default() {
      return {};
    }
  },
  fileType: {
    type: String,
    default: "file"
  },
  multiple: {
    type: Boolean,
    default: true
  },
  editable: {
    type: Boolean,
    default: true
  },
  hoverTip: {
    type: Boolean,
    default: false
  }
});
const emits = defineEmits(["update:fileList"]);

// 文件列表-字段转换
const formatFileList = computed({
  get() {
    const oldFileList = props.fileList || [];
    return oldFileList.map((fileInfo) => ({
      uid: fileInfo.f_id,
      name: fileInfo.f_file_name,
      url: fileInfo.f_file_url,
      thumbUrl: fileInfo.f_file_url
    }));
  },
  set(newFileList) {
    let inFileList = newFileList.map((file) => ({
      f_id: file.uid,
      f_file_name: file.name,
      f_file_url: file.url
    }));
    emits("update:fileList", inFileList);
  }
});

// 接收文件类型
const accept = computed(() => {
  if (props.fileType === "image") {
    return ".jpeg, .png, .jpg";
  } else if (props.fileType === "document") {
    return ".pdf, .doc, .docx, .xlsx, .xls";
  } else {
    return ".jpeg, .png, .jpg, .pdf, .doc, .docx, .xlsx, .xls";
  }
});

/**
 * @description: 根据文件名获取后缀
 * @param {*} fileName 文件名
 * @return {*}
 */
const getFileSuffix = (fileName) => {
  let parts = fileName.split(".");
  let suffix = parts.pop();
  return suffix.toLowerCase();
};

/**
 * @description: 获取不同类型文件的图标
 * @param {*} fileInfo
 * @return {*}
 */
const getTypeIcon = (fileInfo) => {
  const suffix = getFileSuffix(fileInfo.name);
  if (suffix === "png" || suffix === "jpg" || suffix === "jpeg") {
    return h(FileImageOutlined, { style: "color: #414141" });
  } else if (suffix === "pdf") {
    return h(FilePdfOutlined, { style: "color: red" });
  } else if (suffix === "doc" || suffix === "docx") {
    return h(FileWordOutlined, { style: "color: #1d93ff" });
  } else if (suffix === "xlsx" || suffix === "xls") {
    return h(FileExcelOutlined, { style: "color: green" });
  } else {
    return h(FileOutlined);
  }
};

/**
 * @description: 根据后缀判断是否为图片
 * @param {*} fileInfo
 * @return {*}
 */
const getIfSuffixPreview = (fileInfo) => {
  const suffix = getFileSuffix(fileInfo.name);
  if (suffix === "png" || suffix === "jpg" || suffix === "jpeg" || suffix === "pdf") {
    return true;
  } else {
    return false;
  }
};

// 上传组件展示类型
const listType = computed(() => {
  if (props.fileType === "image") {
    return "picture";
  } else if (props.fileType === "document") {
    return "text";
  } else {
    return "text";
  }
});

// 文件上传中的状态
const uploading = ref({
  isUpload: false
});

// 文件类型判断
const getIsImage = (fileType) => {
  return fileType === "image/jpg" || fileType === "image/jpeg" || fileType === "image/png";
};
const getIsDocument = (fileType) => {
  return (
    fileType === "application/pdf" ||
    fileType === "application/vnd.ms-excel" ||
    fileType === "application/msword" ||
    fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
    fileType === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );
};
const getIsFile = (fileType) => {
  return getIsImage(fileType) || getIsDocument(fileType);
};

/**
 * @description: 文件上传服务器
 * @param {*} file
 * @return {*}
 */
const beforeUpload = (file, fileList) => {
  try {
    // 限制多文件上传该方法调用多次(最后一个文件调用上传)
    if (props.multiple === true && file !== fileList[fileList.length - 1]) {
      return Upload.LIST_IGNORE;
    } else {
      uploading.value.isUpload = true;
    }
    const uploadFileInfo = {
      parameter_file: undefined,
      path: props.fileInfo.path,
      f_file_type: props.fileInfo.f_file_type
    };
    // 单选文件类型
    const fileType = file.type;
    let isImage = getIsImage(fileType);
    let isDocument = getIsDocument(fileType);
    let isFile = getIsFile(fileType);
    // 多选处理
    if (props.multiple === true) {
      uploadFileInfo.parameter_file = fileList;
      // 多选文件类型判断
      isImage = fileList.every((file) => {
        return getIsImage(file.type);
      });
      isDocument = fileList.every((file) => {
        return getIsDocument(file.type);
      });
      isFile = fileList.every((file) => {
        return getIsFile(file.type);
      });
    } else {
      uploadFileInfo.parameter_file = [file];
    }
    if (
      (props.fileType === "image" && isImage) ||
      (props.fileType === "document" && isDocument) ||
      (props.fileType === "file" && isFile)
    ) {
      doRequestFile(
        "/file/uploadFiles",
        uploadFileInfo,
        (res) => {
          AppUtil.antd.toastSuccess("上传文件成功");
          handleAddFile(res.data);
          uploading.value.isUpload = false;
        },
        (error) => {
          AppUtil.antd.toastError("文件上传失败!");
          uploading.value.isUpload = false;
        }
      );
      return Upload.LIST_IGNORE;
    } else {
      AppUtil.antd.toast("文件类型不支持!");
      uploading.value.isUpload = false;
      return Upload.LIST_IGNORE;
    }
  } catch (error) {
    console.log("----error", error);
  }
};

/**
 * @description: 添加文件
 * @param {*} files
 * @return {*}
 */
const handleAddFile = (files) => {
  const newFileList = formatFileList.value.slice();
  const newFiles = files.map((fileInfo) => ({
    uid: fileInfo.f_id,
    name: fileInfo.f_file_name,
    url: fileInfo.f_file_url,
    thumbUrl: fileInfo.f_file_url
  }));
  formatFileList.value = newFileList.concat(newFiles);
};

/**
 * @description: 获取开发环境url相对路径
 * @param {*} absolutePath
 * @return {*}
 */
const getDevPath = (absolutePath) => {
  const splits = absolutePath.split("/");
  splits.splice(0, 3);
  return splits.join("/");
};

/**
 * @description: 文件下载
 * @param {*} fileInfo
 * @return {*}
 */
const handleDownload = async (fileInfo) => {
  try {
    const res = await axios({
      method: "get",
      url: process.env.NODE_ENV === "production" ? fileInfo.url : getDevPath(fileInfo.url),
      responseType: "blob"
    });
    const resBlob = res.data;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(resBlob);
    a.download = fileInfo.name;
    a.click();
  } catch (error) {
    console.error("---dowmload-error", error);
    AppUtil.antd.toast("文件下载失败!");
  }
};

/**
 * @description: 删除文件
 * @param {*} file
 * @return {*}
 */
const handleRemoveFile = (file) => {
  const index = formatFileList.value.findIndex((item) => file.uid === item.uid);
  const newFileList = formatFileList.value.slice();
  newFileList.splice(index, 1);
  formatFileList.value = newFileList;
};
</script>

<style lang="less" scoped>
.upload {
  .item-title {
    margin-right: 16px;
    height: 36px;
    line-height: 34px;
  }
  .preview-title {
    cursor: pointer;
    &:hover {
      color: @primary-color
    }
  }
  .empty-tip {
    color: grey;
  }
  .upload-tip {
    margin-left: 8px;
    color: grey;
  }
}
</style>
