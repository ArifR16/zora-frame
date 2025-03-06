<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ZORA-DEX</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #121212;
      color: #ffffff;
      font-family: Arial, sans-serif;
    }
    .container {
      width: 100%;
      max-width: 400px;
      text-align: center;
      background: #1e1e1e;
      border-radius: 15px;
      padding: 20px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    }
    .nft-image {
      width: 100%;
      height: auto;
      border-radius: 10px;
      margin-bottom: 20px;
    }
    h1 {
      font-size: 24px;
      margin-bottom: 10px;
    }
    p {
      font-size: 14px;
      margin-bottom: 20px;
    }
    .button {
      background-color: #ffffff;
      color: #000000;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      text-decoration: none;
      display: inline-block;
    }
    .button:hover {
      background-color: #f0f0f0;
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Gambar NFT -->
    <img 
      id="nft-image"
      src="https://proxy.wrpcd.net/?url=https%3A%2F%2Fzora.co%2Fapi%2Fog-image%2Fcoin%2Fbase%3A0xe85908bb6d17520d358d057bba219f1668b21dde%3Fcrop%3Dfarcaster&s=0712d4dbbcce4b83d634202078296adbcce8054ea77855a0cb5f633ee0f9a642"
      alt="NFT Image"
      class="nft-image"
      onerror="this.src='https://via.placeholder.com/400'; this.onerror=null;"
    />
    <!-- Judul dan Deskripsi -->
    <h1>ZORA-DEX</h1>
    <p>ZORA-DEX: A permissionless, community-driven DEX on the Zora network.</p>
    <!-- Tombol Aksi -->
    <a href="https://zora.co/coin/base:0xe85908bb6d17520d358d057bba219f1668b21dde?referrer=0xd6ba4e38f689a0f65d69d3c31efcf8abacebf551" target="_blank">
      <button class="button">View on Zora</button>
    </a>
  </div>
</body>
</html>
