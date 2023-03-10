# Selamat datang di panduan kontribusi WP-ID

Dari Indonesia untuk Indonesia 🇮🇩. 
Sebelum berkontribusi mohon terlebih dahulu membaca [Disclaimer](README.md).

## 🌟 Menjadi kontributor atau sponsor
Apakah Anda Agensi dan Freelancer WordPress di Indonesia?
Silakan isi [formulir berikut](https://wp-id.org/agensi-freelancer-wordpress-di-indonesia/) jika Anda atau perusahaan Anda ingin terlibat sebagai kontributor atau sponsor untuk kegiatan komunitas WordPress di Indonesia. Pastikan e-mail dan nomor telepon yang dicantumkan aktif untuk kami hubungi.

## 🎉 Memasukan nama anda sebagai kontributor
Jika anda kontributor (plugin, tema, translator, event coordinator, dll), anda dapat menambahkan nama anda pada halaman `kontributor` melalui 2 cara berikut (pilih salah satu saja) :

### 📝 Melalui issue baru
1. Pergi ke halaman [issue](https://github.com/agung2001/wp-id.github.io/issues)
2. Buat issue baru
3. Isi komentar dengan data diri anda dengan format berikut :

```json
{
  "name": "NAMA_SAYA",
  "nickname": "NAMA_PANGGILAN",
  "profile_pict": "FOTO_PROFILE_HALAMAN_WORDPRESS_HARUS_DALAM_BENTUK_GRAVATAR",
  "your_contribution": "JELASKAN_KONTRIBUSI_ANDA",
  "socials": [
      {
        "icon": "fa-brands fa-wordpress",
        "url": "LINK_KE_PROFILE_WORDPRESS"
      }
  ]
}

```

4. Klik submit issue baru

### 👨‍💻 Melalui pull request
1. Fork project ini
2. Buat branch baru
3. Tambahkan file dengan format berikut

File: `/static/contributor/NAMAPANGGILAN.json`
```json
{
  "name": "NAMA_SAYA",
  "nickname": "NAMA_PANGGILAN",
  "profile_pict": "FOTO_PROFILE_HALAMAN_WORDPRESS_HARUS_DALAM_BENTUK_GRAVATAR",
  "your_contribution": "JELASKAN_KONTRIBUSI_ANDA",
  "socials": [
      {
        "icon": "fa-brands fa-wordpress",
        "url": "LINK_KE_PROFILE_WORDPRESS"
      }
  ]
}

```

4. Buat `Pull Request` baru ke `master` branch

Catatan:
- Hanya menerima link social dari (WordPress / GitHub)


## 📟 Memasukan nama plugin & tema anda
Jika anda developer, salah satu kontribusi yang anda dapat lakukan untuk WordPress adalah dengan mengembangkan plugin dan tema.

Dengan website ini kami berharap dapat menjadi pusat informasi daftar plugin yang telah dikembangkan oleh developer di Indonesia 🇮🇩.

Untuk menambahkan plugin/tema, kamu dapat :  
1. Fork project ini
2. Buat branch baru
3. Tambahkan file dengan format berikut

Plugin : `/static/plugins/NAMAPLUGIN.json`
Tema : `/static/themes/NAMATEMA.json`
```json
{
  "name": "NAMA_PLUGIN_ATAU_TEMA",
  "thumbnail": "THUMBNAIL_PLUGIN_ATAU_TEMA",
  "excerpt": "JELASKAN_PLUGIN_ANDA_SECARA_SINGKAT_HANYA_BOLEH_MAXIMUM_50_KATA",
  "url": "LINK_KE_HALAMAN_PLUGIN_ATAU_TEMA"
}

```

4. Buat `Pull Request` baru ke `master` branch 

Catatan:
- Hanya menerima url dari plugin/theme repository, aka plugin/theme gratis tidak berbayar
- Pastikan sebelum membuat `Pull Request` baru anda sudah menggunakan branch yang benar 