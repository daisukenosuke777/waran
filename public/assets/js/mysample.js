
// ropsten
// const contract_address = "0xc4c87dbe00c38e20f1df34c173e5f34a7bdbed28";
const contract_address = "0x976a5a28a948243c5a9b20f124d675e875105289";
var contract;
var accounts;

window.addEventListener('load', async() => {

  console.log(web3);
  if(typeof web3 !== 'undefined') {
    web3js = new Web3(web3.currentProvider);
    await window.ethereum.enable();
  } else {
    alert('install MetaMask');
  }

  // contract
  console.log(abi);
  console.log(contract_address);
  contract = new web3js.eth.Contract(abi, contract_address);
  console.log(contract);

  // account
  accounts = await web3js.eth.getAccounts();
  console.log(accounts);

  web3.version.getNetwork((err, netId) => {
    console.log('network: ' + netId);
    if(netId != '3') alert('Ropsten テストネットワークに接続してください');
    
    switch (netId) {
      case "1":
        console.log('This is mainnet');
        break;
      case "2":
        console.log('This is the deprecated Modern test network');
        break;
      case "3":
        console.log('This is the ropsten test network');
        get_menu();
        break;
      case "4":
        console.log('This is the rinkeby test network');
        break;
      case "5":
        console.log('This is the goerli test network');
        break;
      case "42":
        console.log('This is the kovan test network');
        break;
      default:
        console.log('This is an known network');
        break;
    }
  })

})


async function get_menu() {
  console.log('getmenu');
  let menu = await contract.methods.get_menu().call();
  // console.log(menu);
  for(var i = 0; i < menu.length; i++) {
    console.log(menu[i]);
    $("#menu").append(`<tr><th>${i}</th><td>${menu[i].item_name}</td><td>${menu[i].price}</td></tr>`)
  }
}

async function make_order(item_id, num, amount) {
  // let item_id = document.getElementById('make_order_item_id').value;
  // let num = document.getElementById('make_order_num').value;
  // let amount = document.getElementById('make_order_amount').value;
  console.log('make_order');
  // alert(window.navigator.userAgent)
  // alert("userAgent.indexOf('mobile') : " + window.navigator.userAgent.indexOf('mobile'))
  // alert("userAgent.indexOf('MetaMask') : " + window.navigator.userAgent.indexOf('MetaMask'))
  await contract.methods.make_order(item_id, num).send({gas: 140000, value: amount, from: accounts[0]});
}

function provide_order(order_id) {
  // let order_id = document.getElementById('provide_order_id').value;
  console.log('provide_order');
  console.log(order_id);
  contract.methods.provide_order(order_id).send({from: accounts[0]});
}

async function get_orders() {
  console.log('get_orders');
  let orders = await contract.methods.get_all_orderlist().call();
  $("#orders tr").remove();
  $("#orders").append('<tr><th>注文番号</th><th>メニュー番号</th><th>数</th><th>提供済</th></tr>');
  console.log(orders);
  for(order of orders) {
    console.log(order);
    $("#orders").append(`<tr><th>${order.order_id}</th><td>${order.item_id}</td><td>${order.num}</td><td>${order.status=="1"?"済":"作成中"}</td></tr>`);
  }
}

function withdraw() {
  console.log('withdraw');
  contract.methods.withdraw().send({from: accounts[0]});
}

function delete_orders() {
  console.log('delete_orders');
  contract.methods.debug_delete_orders().send({from: accounts[0]});
}

async function get_balance() {
  let balance = await web3js.eth.getBalance(contract_address);
  console.log(balance, 'wei');
  // document.getElementById('balance').innerText = balance + 'wei';
}
