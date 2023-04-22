# Lua Planter findings

The Lua planter was an [indigogo campaign](https://www.indiegogo.com/projects/lua-the-smart-planter-with-feelings) that delivered some devices
but failed and was quickly abandoned by the original author.

The device needed the web app at `https://luaplanter.com` for configuration, but that site is down. I still had the PWA locally, so I can still access it.

I have managed to extract some of the files from the PWA, which are available in the [source](source) directory.  Notably `sw.js` is missing.

![luaplanter.com](images/luaplanter.com.png "luaplanter.com")


## Generated QR codes

Some QR codes are generated from the PWA and decoded using the [zxing.org decoder](https://zxing.org/w/decode.jspx) in order to try to reverse engineer the QR code generation.

### firmware

![Firmware](images/qr-code-0.png "Firmware")

```
41 14 d0 f0 e0 17 38 62   fc a7 bf 53 a7 57 9e d8
9c cf c0 ec 11 ec 
```

### 7px 10/100% 6/60k lux 0/40C

![qr code 1](images/qr-code-1.png "qr code 1")

```
41 15 30 f0 70 02 80 a6   40 00 07 01 70 00 00 00
00 00 00 ec 11 ec 
```

### 7px 10/100% 6/60k lux 0/5C

![qr code 2](images/qr-code-2.png "qr code 2")

```
41 15 30 f0 70 00 50 a6   40 00 07 01 70 00 00 00
00 00 00 ec 11 ec 
```

### 7px 10/100% 6/60k lux 35/40C

![qr code 3](images/qr-code-3.png "qr code 3")

```
41 15 30 f0 72 32 80 a6   40 00 07 01 70 00 00 00
00 00 00 ec 11 ec 
```

### 7px 10/100% 6/37 lux 0/40C

![qr code 4](images/qr-code-4.png "qr code 4")

```
41 15 30 f0 70 02 80 a6   40 00 00 30 00 00 00 00
00 00 00 ec 11 ec 
```

### 7px 10/100% 47k/60k lux 0/40C

![qr code 5](images/qr-code-5.png "qr code 5")

```
41 15 30 f0 70 02 80 a6   43 b1 26 11 70 00 00 00
00 00 00 ec 11 ec 
```

### 7px 10/20% 6/60k lux 0/40C

![qr code 6](images/qr-code-6.png "qr code 6")

```
41 15 30 f0 70 02 80 a1   40 00 06 11 70 00 00 00
00 00 00 ec 11 ec 
```

### 7px 90/100% 6/60k lux 0/40C

![qr code 7](images/qr-code-7.png "qr code 7")

```
41 15 30 f0 70 02 85 a6   40 00 06 11 70 00 00 00
00 00 00 ec 11 ec
```

### 30px 10/100% 6/60k lux 0/40C

![qr code 8](images/qr-code-8.png "qr code 8")

```
41 15 30 f1 e0 02 80 a6   40 00 06 11 70 00 00 00
00 00 00 ec 11 ec
```

### 30px 20/80% 60/6k lux 10/27C

![qr code 9](images/qr-code-9.png "qr code 9")

```
41 15 30 f1 e0 51 e1 93   2c 80 07 01 70 00 00 00
00 00 00 ec 11 ec 
```

### 30px 25/50% 2k/60k lux 5/30C (Sweet Basil)

![qr code 10](images/qr-code-10.png "qr code 10")
```
41 15 30 f1 e0 51 e1 93   2c 80 07 01 70 00 00 00
00 00 00 ec 11 ec 
```
