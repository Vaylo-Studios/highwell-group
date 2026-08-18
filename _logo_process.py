from PIL import Image
import math

src = "/Users/kylerivers/projects/highwell-Printing/Screenshot 2026-08-17 at 2.52.29 PM.png"
im = Image.open(src).convert("RGBA")
w, h = im.size
print("size", w, h)
px = im.load()
bg = px[0, 0]
print("corner", bg)

low, high = 6, 40
for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        dist = math.sqrt((r - bg[0]) ** 2 + (g - bg[1]) ** 2 + (b - bg[2]) ** 2)
        if dist <= low:
            px[x, y] = (r, g, b, 0)
        elif dist >= high:
            continue
        else:
            alpha_frac = (dist - low) / (high - low)
            nr = max(0, min(255, round(bg[0] + (r - bg[0]) / alpha_frac)))
            ng = max(0, min(255, round(bg[1] + (g - bg[1]) / alpha_frac)))
            nb = max(0, min(255, round(bg[2] + (b - bg[2]) / alpha_frac)))
            na = max(0, min(255, round(alpha_frac * 255)))
            px[x, y] = (nr, ng, nb, na)

bbox = im.getbbox()
print("bbox", bbox)
im2 = im.crop(bbox)
out = "/Users/kylerivers/projects/highwell-Printing/public/brand/highwell-logo.png"
im2.save(out)
print("saved", im2.size, out)
