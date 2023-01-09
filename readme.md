## TECH: 
1. Express JS
2. MySQL

## Gunakan Extension [REST CLIENT](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) untuk hit API

**Endpoint Articles**

`GET https://localhost:3000/api/v1/articles`

###

`POST https://localhost:3000/api/v1/articles
Content-Type: application/json
Accept: application/json`

```json{
  "category": "Komputer",
  "title": "Javascript",
  "author": "Joan",
  "content": "JavaScript adalah bahasa pemrograman tingkat tinggi dan dinamis. JavaScript populer di internet dan dapat bekerja di sebagian besar penjelajah web populer seperti Google Chrome, Internet Explorer, Mozilla Firefox, Netscape dan Opera. Kode JavaScript dapat disisipkan dalam halaman web menggunakan tag SCRIPT."
}```

###

`PUT https://localhost:3000/api/v1/articles/{id}
Content-Type: application/json
Accept: application/json`

```json{
  "category": "Komputer",
  "title": "Javascript",
  "author": "Yes bang",
  "content": "JavaScript adalah bahasa pemrograman tingkat tinggi dan dinamis. JavaScript populer di internet dan dapat bekerja di sebagian besar penjelajah web populer seperti Google Chrome, Internet Explorer, Mozilla Firefox, Netscape dan Opera. Kode JavaScript dapat disisipkan dalam halaman web menggunakan tag SCRIPT."
}```

###

`DELETE https://localhost:3000/api/v1/articles/{id}
Content-Type: application/json
Accept: application/json`


**Endpoint Articles**

`GET https://localhost:3000/api/v1/categories`

###

`POST https://localhost:3000/api/v1/categories
Content-Type: application/json
Accept: application/json`

```json{
  "category": "Komputer",
  "title": "Javascript",
  "author": "Joan",
  "content": "JavaScript adalah bahasa pemrograman tingkat tinggi dan dinamis. JavaScript populer di internet dan dapat bekerja di sebagian besar penjelajah web populer seperti Google Chrome, Internet Explorer, Mozilla Firefox, Netscape dan Opera. Kode JavaScript dapat disisipkan dalam halaman web menggunakan tag SCRIPT."
}```

###

`PUT https://localhost:3000/api/v1/categories/{id}
Content-Type: application/json
Accept: application/json`

```json{
  "category": "Komputer",
  "title": "Javascript",
  "author": "Yes bang",
  "content": "JavaScript adalah bahasa pemrograman tingkat tinggi dan dinamis. JavaScript populer di internet dan dapat bekerja di sebagian besar penjelajah web populer seperti Google Chrome, Internet Explorer, Mozilla Firefox, Netscape dan Opera. Kode JavaScript dapat disisipkan dalam halaman web menggunakan tag SCRIPT."
}```

###

`DELETE https://localhost:3000/api/v1/categories/{id}
Content-Type: application/json
Accept: application/json`
