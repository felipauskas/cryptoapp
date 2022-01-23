export const convertToMoney = new Intl.NumberFormat("us-EN", { minimumFractionDigits: 0 });

export function dateParsed(date) {
	const newDate = new Date(date);
	return newDate;
}
