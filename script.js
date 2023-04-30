function fibonacci(num) {
// your code here
	return fibonacci(num-1)+fibonacci(num-2);
}

module.exports = fibonacci;
