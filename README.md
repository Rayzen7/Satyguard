# SatyGuard
<img src="./Readme/head.png" width="650"/>
<p style="margin-top: 4px;" align="justify">
SatyGuard adalah platform digital yang dirancang untuk memberikan perlindungan dan dukungan psikologis bagi korban kekerasan serta meningkatkan kesadaran kesehatan mental. Website ini menyediakan fitur utama yaitu chatbot untuk konsultasi kesehatan mental dan mood detector berbasis AI yang menganalisis kondisi emosional pengguna. Selain itu, SatyGuard juga menghadirkan artikel edukatif dan komunitas pemulihan untuk membantu pengguna dalam mengatasi trauma. Dengan pendekatan inovatif yang menggabungkan teknologi dan psikologi, platform ini bertujuan menciptakan lingkungan yang lebih aman dan mendukung bagi individu yang rentan terhadap kekerasan dan gangguan mental.
</p>

## Framework & Bahasa yang Digunakan
<div align="center">
    <img src="./Readme/icon/laravel.png" width="70" hspace="7"/>
    <img src="./Readme/icon/react.png" width="70" hspace="7"/>
    <img src="./Readme/icon/python.png" width="70" hspace="7"/>
</div>

## Cara Menjalankan Website
### 1. Menjalankan Kode Frontend
<p align="justify">
    Untuk menjalankan kode Frontend. Masuk ke dalam folder Frontend dengan mengetikkan path berikut
</p>

```sh 
cd ./Frontend
```

<p align="justify">
    Setelah itu install node modules dengan mengetikkan perintah dibawah ini
</p>

```sh 
npm install
```

<p align="justify">
    Lalu jalankan Frontendnya dengan perintah di bawah ini
</p>

```sh 
npm run dev --port=5173
```

### 2. Menjalankan Kode Backend
<p align="justify">
    Untuk menjalankan kode Backend. Masuk ke dalam folder Backend dengan mengetikkan path berikut
</p>

```sh 
cd ./Backend
```

<p align="justify">
    Setelah itu install vendor dan node modules dengan perintah berikut ini
</p>

```sh 
composer install
```

```sh 
npm install
```

<p align="justify">
    Kemudian import database satyguard.sql ke dalam mysql dengan nama satyguard, lalu hubungkan storage backend dengan mengetikkan perintah
</p>

```sh 
php artisan storage:link
```

<p align="justify">
    Jalankan Backendnya dengan perintah di bawah ini
</p>

```sh 
php artisan serve --port=8000
```

### 3. Menjalankan Machine Learning
<p align="justify">
    Untuk menjalankan kode Machine Learning. Masuk ke dalam folder Backend dengan mengetikkan path berikut
</p>

```sh 
cd ./Machine-Learning
```

<p align="justify">
    Setelah itu install library yang diperlukan python terlebih dahulu
</p>

```sh 
pip install flask flask-cors google-generativeai pandas scikit-learn
```

<p align="justify">
    Jalankan chatbot.py dengan perintah di bawah ini
</p>

```sh 
python chatbot.py
```

<p align="justify">
    Jalankan juga mood-detection.py dengan perintah di bawah ini
</p>

```sh 
python mood-detection.py
```

## Dokumentasi fitur-fitur Satyguard
<p align="justify">
    Landing page Home, Information, dan Download
</p>

<video src="./Readme/video/video-1.mp4" width="400"></video>