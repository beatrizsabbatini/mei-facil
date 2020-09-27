export function formatCurrency(string){

	const value = parseFloat(string);
	const formattedValue = value.toFixed(2)

	return `R$ ${formattedValue}`

}