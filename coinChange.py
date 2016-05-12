 # Given coins of different denominations, and a total amount of money
 # Write a function that computes the fewest # of coins needed for that amount
 # Assume there's an infinite number of the coins
import math

def coinChange (coins, total):
	fewest = -1
	seen = {}

	coins.sort(reverse=True)

	for i, coin in enumerate(coins):
		if coin > total:
			return fewest
		if hasattr(seen, str(coin)):
			pass
		else:
			seen[coin] = coin

	for i, coin in enumerate(coins):
		subTotal = total % coin
		largeCoins = total / coin

		if subTotal in coins:
			fewest += 1
		print largeCoins

	print fewest + math.floor(largeCoins)

	return fewest + math.floor(largeCoins)
	

coinChange([1,2,5], 11)