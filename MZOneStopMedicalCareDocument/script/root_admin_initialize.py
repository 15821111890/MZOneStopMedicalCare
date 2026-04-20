#!/usr/bin/env python3
"""
初始化 MZOneStopMedicalCare 的 root 管理员账号。

- 连接 mongodb://127.0.0.1:27017/mz_medical
- 集合 medicalAdminUsers
- account=root, password=MD5("Medicine_rooter_123456"), roleType=1 (管理员)
- 创建 memberId / account 唯一索引
- 已存在则提示是否覆盖
"""

import hashlib
import os
import sys
import uuid

try:
    from pymongo import MongoClient, ASCENDING
except ImportError:
    print("pymongo 未安装：sudo pip3 install pymongo")
    sys.exit(1)


MONGO_URI = os.environ.get("MEDICAL_MONGO_URI", "mongodb://127.0.0.1:27017/mz_medical")
COLLECTION = "medicalAdminUsers"

ROOT_ACCOUNT = "root"
ROOT_PASSWORD_PLAIN = "Medicine_rooter_123456"


def md5(text: str) -> str:
    return hashlib.md5(text.encode("utf-8")).hexdigest()


def main():
    client = MongoClient(MONGO_URI)
    db = client.get_default_database()
    coll = db[COLLECTION]

    coll.create_index([("memberId", ASCENDING)], unique=True)
    coll.create_index([("account", ASCENDING)], unique=True)

    existing = coll.find_one({"account": ROOT_ACCOUNT})
    pwd_md5 = md5(ROOT_PASSWORD_PLAIN)

    if existing:
        print(f"root 账号已存在 memberId={existing.get('memberId')}")
        choice = input("覆盖密码为默认值？ [y/N]: ").strip().lower()
        if choice != "y":
            print("已取消")
            return
        coll.update_one(
            {"_id": existing["_id"]},
            {"$set": {"password": pwd_md5, "roleType": 1, "status": 1}},
        )
        print("已覆盖。")
        return

    doc = {
        "memberId": str(uuid.uuid4()),
        "account": ROOT_ACCOUNT,
        "password": pwd_md5,
        "nickName": "Root Admin",
        "roleType": 1,
        "status": 1,
    }
    coll.insert_one(doc)
    print(f"已创建 root 账号 memberId={doc['memberId']}")


if __name__ == "__main__":
    main()
