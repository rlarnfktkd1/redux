export const url = {
  dasom:
    process.env.NODE_ENV === "development"
      ? '[개발 중 사용 API 주소]'
      : "[배포 서버시 사용 API 주소]"
}

console.log(
  "this app is Service",
  `${process.env.NODE_ENV.substr(0,2)}-${url.dasom.substr(21,4)}`
)