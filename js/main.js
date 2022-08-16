const dollar = 11000.34;
const yevro = 12000;

let xarajat1 = 500,
	xarajat2 = 250,
	xarajat3 = 120;

let a = xarajat1 * dollar,
	b = xarajat2 * dollar,
	c = xarajat3 * yevro;
let d = a + b + c;

let sum = Number(prompt('Sizdagi pul summasini kiriting:'));

if (sum >= d) {
	console.log("Oq yo'l");
} else {
	console.log(
		"Sizdagi pul miqdori yetarli emas deb topilganligi sababli, azgina sabr qilishingizni so'raymiz",
	);
}
