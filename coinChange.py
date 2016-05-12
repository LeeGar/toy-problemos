 # Given coins of different denominations, and a total amount of money
 # Write a function that computes the fewest # of coins needed for that amount
 # Assume there's an infinite number of the coins

#Optimal sub solution --> C(Total) = min[i] { C(total-coins[i]), C(total-coins[i+1]), C(total-coins[n])} + 1

import math

class Solution(object):
    def coinChange(self, coins_available, coins_used, amount):
        """
        :type coins_available: List[int]
        :type coins_used: List[int]
        :type amount: int
        :rtype: int
        """

        #If the sum of all coins used = target amount, return the list of coins used
        if sum(coins_used) == amount: 
        	yield coins_used
        #If the sum of all coins used is greater than the target, we fucked up, pass
        elif sum(coins_used) > amount:
        	pass
        #If there are no more available coins, then pass as well
        elif len(coins_available) == 0:
        	pass
        else:
        	#Recursive call for all coins, using first available coin in each call
        	for coin in self.coinChange(coins_available[:], coins_used+[coins_available[0]], amount):
        		yield coin
        	#Recursive call to pop out each first coin and resend through
        	for coin in self.coinChange(coins_available[1:], coins_used, amount):
        		yield coin




x = Solution()

solutions = [s for s in x.coinChange([1,2,3], [], 5)]
for s in solutions:
	print s

print 'optimal solution: ', min(solutions, key=len)


