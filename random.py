import threading, time, random

class MyThread1 (threading.Thread):
	def run(self):
		print 'Thread 1 sleeping'
		time.sleep(random.randint(1,10))
		print 'I should finish first'

class MyThread2 (threading.Thread):
	def run (self):
		print 'Thread 2 sleeping'
		time.sleep(random.randint(1, 10))
		print 'I should finish last'


m1 = MyThread1()
m1.start()

m2 = MyThread2()
m2.start()

#Could give issues because thread 2 might finish before thread 1 and fuck shit up


import threading time, random
lock = threading.Lock()

class MyThread1 (threading.Thread):
	def run(self):
		global lock #2. Declares modifications to the lock in the global scope, to prevent hoisting
		print 'Thread 1 sleeping'
		time.sleep(random.randint(1,10))
		print 'I should finish first'
		lock.release() #3. Unlocks the lock after Thread 1 finished

class MyThread2 (threading.Thread):
	def run (self):
		global lock #4. Also declares the lock as global
		print 'Thread 2 sleeping'
		time.sleep(random.randint(1, 10))
		lock.acquire() #5. Wait until the lock has been released. We can only have 1 lock on a mutex
		print 'I should finish last'


lock.acquire() #1. Before calling the stack, activate mutex lock

m1 = MyThread1()
m1.start()

m2 = MyThread2()
m2.start()
