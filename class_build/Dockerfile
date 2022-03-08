# FROM ubuntu:20.04
FROM node:14

WORKDIR /class_build/
COPY . /class_build/
# COPY를 하면 자동적으로 폴더를 생성함

RUN yarn install
RUN yarn build:ssr
# 실행하고 이동하는 명령어
CMD yarn start
# CMD는 맨 마지막에 사용