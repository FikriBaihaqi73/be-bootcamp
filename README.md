# Hasil Backend Bootcamp - Day 3

Ini adalah contoh hasil akhir dari materi Backend dan Database (Hari ke-3). Proyek ini menggunakan **Node.js**, **Express**, dan **PostgreSQL**.

## 🛠️ Persiapan

1.  Pastikan sudah menginstall [Node.js](https://nodejs.org/).
2.  Pastikan sudah menginstall [PostgreSQL](https://www.postgresql.org/).

## 🗄️ Persiapan Database

Buat database baru bernama `latihan_db` dan jalankan perintah SQL berikut untuk membuat tabel berita:

```sql
CREATE TABLE berita (
    id SERIAL PRIMARY KEY,
    judul VARCHAR(255) NOT NULL,
    isi TEXT
);

-- Tambahkan contoh data
INSERT INTO berita (judul, isi) VALUES 
('Belajar Node.js', 'Node.js sangat seru untuk dipelajari.'),
('Express.js Mantap', 'Membuat API jadi jauh lebih mudah dengan Express.');
```

## 🚀 Cara Menjalankan

1.  Buka terminal di folder ini.
2.  Install library yang dibutuhkan:
    ```bash
    npm install
    ```
3.  Buat file `.env` di folder utama dan tambahkan baris berikut:
    ```env
    DATABASE_URL=postgresql://neondb_owner:npg_bPZ1Etx5YGjM@ep-royal-meadow-a19ojk7f-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
    PORT=3000
    ```
4.  Jalankan server:
    ```bash
    node server.js
    ```
5.  API siap diakses di `http://localhost:3000/berita`.

## 📌 Endpoint API

| Method | Endpoint | Keterangan |
|--------|----------|------------|
| GET | `/berita` | Melihat semua berita |
| GET | `/berita/:id` | Melihat satu berita sesuai ID |
| POST | `/berita` | Menambah berita baru |
| PUT | `/berita/:id` | Mengubah isi berita |
| DELETE | `/berita/:id` | Menghapus berita |
