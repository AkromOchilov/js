const dollar = 11000.34;
const yevro = 12000;

let destination = prompt("Siz bormoqchi bo'lgan davlat");

let xarajat1 = 500,
	xarajat2 = 250,
	xarajat3 = 120;

let a = xarajat1 * dollar,
	b = xarajat2 * dollar,
	c = xarajat3 * yevro;
let total = a + b + c;

let sum = Number(prompt('Sizdagi pul summasini kiriting:'));
console.log(`Sizdagi pul miqdori ${sum} so'm`);

if (sum >= total) {
	console.log(`Sizning pulingiz ${destination}ga borishga yetadi, Oq yo'l!`);
} else {
	console.log(
		`Uzr, sizning pulingiz ${destination}ga borish uchun ${
			total - sum
		} so'm yetmayapti`,
	);
	alert(
		`Uzr, sizning pulingiz ${destination}ga borish uchun ${
			total - sum
		} so'm yetmayapti`,
	);
}
