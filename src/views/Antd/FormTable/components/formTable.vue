<!--
 * @Author: zengjing
 * @Date: 2024-09-04 16:40:37
 * @LastEditTime: 2024-12-18 13:16:44
 * @FilePath: \xsqdc:\Users\29737\Desktop\muckAbout\src\views\Antd\FormTable\components\formTable.vue
 * @Description: 学习form+table
-->
<template>
  <h3>form+Table表单校验</h3>
  <a-form :model="formState" ref="formRef" :wrapper-col="{ span: 4 }" :rules="rules">
    <a-row>
      <a-col :span="24">
        <a-form-item label="Username" name="username">
          <a-input v-model:value="formState.username" />
        </a-form-item>
      </a-col>
      <a-col :span="24"
        ><a-form-item label="Password" name="password">
          <a-input-password v-model:value="formState.password" autocomplete /> </a-form-item
      ></a-col>
      <a-col :span="24">
        <a-button type="primary" ghost @click="addTable" style="margin-bottom: 10px">
          新增
        </a-button>
        <a-table
          :dataSource="formState.list"
          :columns="columns"
          bordered
          :pagination="false"
        >
          <template #bodyCell="{ column, record, index }">
            <template v-if="column.key === 'name'">
              <a-form-item
                :name="['list', index, 'name']"
                :rules="baseRules"
                :wrapper-col="{ span: 24 }"
              >
                <a-input
                  style="width: 100%"
                  v-model:value="formState.list[index].name"
                  @change="handleTableDataChange(index, 'name')"
                ></a-input>
              </a-form-item>
            </template>
            <template v-if="column.key === 'age'">
              <a-form-item
                :name="['list', index, 'age']"
                :rules="{ validator: ageRules }"
                :wrapper-col="{ span: 24 }"
              >
                <a-input-number
                  style="width: 100%"
                  v-model:value="formState.list[index].age"
                ></a-input-number>
              </a-form-item>
            </template>
            <template v-if="column.key === 'address'">
              <a-form-item
                :name="['list', index, 'address']"
                :rules="baseRules"
                :wrapper-col="{ span: 24 }"
              >
                <a-input
                  style="width: 100%"
                  v-model:value="formState.list[index].address"
                ></a-input>
              </a-form-item>
            </template>
          </template>
        </a-table>
      </a-col>
      <a-col :span="24">
        <a-button type="primary" @click="onSubmit" style="margin-top: 10px; width: 200px">
          提交
        </a-button>
        <a-button style="margin-left: 10px; width: 200px" @click="resetForm"
          >Reset</a-button
        >
      </a-col>
    </a-row>
  </a-form>
</template>
<script setup>
import { reactive } from "vue";

const rules = {
  username: { required: true, message: "Please input your username!" },
  password: { required: true, message: "Please input your password!" },
};
const baseRules = {
  required: true,
  message: "请输入",
};
const ageRules = (_rule, value) => {
  if (value === undefined || value === null) {
    return Promise.reject(new Error("请输入"));
  } else if (value < 0) {
    return Promise.reject(new Error("年龄不能小于0"));
  } else {
    return Promise.resolve();
  }
};

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
  },
];
const formRef = ref();
const formState = reactive({
  username: undefined,
  password: undefined,
  list: [],
});

const addTable = () => {
  formState.list.push({ id: Math.random() });
};

// 修改Table行
const handleTableDataChange = (index, typeName) => {
  // 修改name，给age赋值随机数
  if (typeName == "name") {
    formState.list[index].age =
      index + Math.floor(Math.random() * 10) - Math.floor(Math.random() * 10);
  }

  // 由于name的修改让age变化了，所以我期待重新校验当前的table行的index
  verifyFileds(index);
};

// 校验某一行
const verifyFileds = (index) => {
  let arr = [
    "age", //未税单价
  ];
  let fileds = arr.map((el) => ["list", index, el]);
  formRef.value.validateFields(fileds);
};

// 重置表单校验
const resetForm = () => {
  formRef.value.resetFields();
};
// 提交整体校验
const onSubmit = () => {
  // 或者 formRef.value.validateFields().then().catch()
  formRef.value
    .validate()
    .then(() => {
      console.log("values", dynamicValidateForm.domains);
    })
    .catch((error) => {
      console.log("error", error);
    });
};
</script>
<style scoped lang="scss"></style>
