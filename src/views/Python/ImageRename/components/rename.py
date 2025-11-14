# 此脚本用于批量重命名指定目录中的图片文件，支持自定义文件扩展名和路径
import os
import shutil
import tkinter as tk
from tkinter import filedialog
# 重名文件名称
def rename_images(directory, extension="png"):
    try:
        files = os.listdir(directory)
        for i, filename in enumerate(files):
            newName=filename.split(".")[0]
            if filename.endswith(f".{extension}") and filename.split(".").__len__() == 2:
                name="指南针 (1)"
                targetName="compass"
                if name in newName:
                    newName=newName.replace(name, targetName)
                    newName=newName.replace("@2x", "-double")
                    newName=newName.replace("@3x", "-triple")
                
                    new_filename = f"{newName}.{extension}"
                    # 调用函数复制并重命名图片 合并路径和名字
                    old_path = os.path.join(directory, filename)
                    new_path = os.path.join(directory, new_filename)

                    # os.rename(old_path, new_path)
                    # 调用shutil.copy()函数复制图片
                    shutil.copy(old_path, new_path, follow_symlinks=False)
                    print(f"Renamed {filename} to {new_filename}")
    except Exception as e:
        print(f"无法读取目录: {e}")


def select_folder():
    # 弹出文件夹选择对话框
    folder_path = filedialog.askdirectory()
    if folder_path:
        rename_images(folder_path)

# 创建主窗口
root = tk.Tk()
root.title("读取本地文件夹")

# 创建按钮
button = tk.Button(root, text="选择文件夹", command=select_folder)
button.pack(pady=20)

# 运行主循环
root.mainloop()
