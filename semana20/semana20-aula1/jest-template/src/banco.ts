import { User1 } from "./data"

export function performPurchase(user: User1, value: number): User1 | undefined {
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value		
		}
	}
	return undefined
}

export default performPurchase