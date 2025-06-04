function startBreathing() {
    const circle = document.getElementById('breathing-circle');

    async function breathingCycle() {
        while(true) {
            circle.style.transform = 'scale(1.5)'; //inhalar 4s
            await delay(4000);

            //retener 7s
            circle.style.backgroundColor = '#f3b55a';
            await delay(7000);
            
            circle.style.transform = 'scale(1)'; //exhalar 8s
            await delay(8000);
        }
    }

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    breathingCycle();
}