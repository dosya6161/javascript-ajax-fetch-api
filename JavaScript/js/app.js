/*  JavaScript | AJAX va fetch() API  */
/*
Go To Toc

AJAX va fetch() API
- AJAX
- How to work with AJAX request?
- Demo: Bitcoin in USD
- JSON
- Demo: Currency Exchange
- FETCH() API

AJAX stands for Asynchronous JavaScript and XML and the term was coined by Jesse James Garret in 2005.

It is based on a group of web technologies such as HTML(and at the time XHTML),CSS,JavaScript,the DOM,XML,JSON and a web API
called XMLHttpRequest or just XHR for short.

This will allow to update parts of the front-end dynamically without refreshing the whole page.

For example, when you visit gmail or facebook, you can simply interact with the app without refreshing the page. AJAX makes this
possible.

Instead of modifying the entire DOM, we instead make background requests for data from servers, and then use that data to update the
page's contents live via the DOM'S APIs.

    AJAX
AJAX asinxron JavaScript va XML degan ma'noni anglatadi va bu atama 2005 yilda Jessi Jeyms Garret tomonidan kiritilgan.

U HTML (va o'sha paytda XHTML), CSS, JavaScript, DOM, XML, JSON va web API kabi veb-texnologiyalar guruhiga asoslangan.
XMLHttpRequest yoki qisqacha XHR deb ataladi.

Bu butun sahifani yangilamasdan, old qismning qismlarini dinamik ravishda yangilash imkonini beradi.

Masalan, gmail yoki facebookga tashrif buyurganingizda, sahifani yangilamasdan oddiygina ilova bilan muloqot qilishingiz mumkin. AJAX buni amalga oshiradi.
mumkin.

Butun DOMni o'zgartirish o'rniga biz serverlardan ma'lumotlar uchun fon so'rovlarini qilamiz va keyin bu ma'lumotlardan ma'lumotlarni yangilash uchun foydalanamiz.
sahifa mazmuni DOM'S API orqali jonli.

How to work with AJAX request?

Browsers provide an API to work with XMLHttpRequest object(XHR)for short.This will let us to send HTTP
requests and recieve data responses in various formats such as XML,HTML,JSON,text,binary and etc.

// 1. Createanew XMLHttpRequest Object using it's constructor
var xhr=new XMLHttpRequest();
// 2. Define an event handler for the load
xhr.onload=function(){
}
    //3.Get the data from`xhr object's responseText property
    var data=this.responseText;
    console.log('data arrived',data);
// 4. Create an HTTP GET request to given URL
xhr.open("GET","http://example.com/");
// 5. Send created get request
xhr.send()
*/

document.addEventListener('DOMContentLoaded',() => {
    getBitcoinPrice();

    document.querySelector('button').addEventListener('click', () => {
        fetch('https://api.exchangeratesapi.io/latest?base=USD')
        .then(res => res.json())
        .then(data => {
            let currency = document.querySelector('input').value;
            let rate = data.rates[currency.toUpperCase()];
            if (rate != undefined) {
                document.querySelector('#rate').innerHTML = `1 USD is ${rate.toFixed(3)} (${currency})`;
            }
            else {
                document.querySelector('#rate').innerHTML = 'Currency is not Valid';
            }
        })
        .catch(e => {
            console.log("Error: ", e)
        });
        // // 1. XMLHttpRequest obyektini yaratash 
        // let xhr = new XMLHttpRequest();

        // // 2. Event Handler 

        // xhr.onload = function () {
        //     let data = JSON.parse(this.responseText);
        //     let currency = document.querySelector('input').value;
        //     let rate = data.rates[currency.toUpperCase()];
        //     if (rate != undefined) {
        //         document.querySelector('#rate').innerHTML = `1 USD is ${rate.toFixed(3)} (${currency})`;
        //     }
        //     else {
        //         document.querySelector('#rate').innerHTML = 'Currency is not Valid';
        //     }
        // }

        // // 3. GET request

        // xhr.open('GET', 'https://api.exchangeratesapi.io/latest?base=USD');

        // // 4. Send request
        // xhr.send();
    });
});


function updateBitcoinPrice(newValue) {
    document.querySelector('#narx').innerHTML = `${newValue} (USD)`;
    setTimeout(getBitcoinPrice, 1*1000);
}

function getBitcoinPrice() {
    //1. XHD obyektini hosil qilish
    let xhd = new XMLHttpRequest();
    let url = "https://blockchain.info/q/24hrprice"
    //2. Event handler yozish kerak 
    xhd.onload = function() {
        try {
            let data = this.responseText;
            document.querySelector('#narx').innerHTML = `${data} (USD)`;
            updateBitcoinPrice(data);
        } catch(e) {
            console.log("Error: ", e);
        }
        
    }
    //3. AJAX request hosil qilish kerak 
    
    xhd.open('GET', url);
    //4. AJAX request web service ga yuborish   
    xhd.send();
}