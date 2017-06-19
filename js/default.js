var result = window.confirm('準備ok?');
if(result){
document.getElementById('choice').textContent = 'Okが押されました';
}else{
  document.getElementById('choice').textcontent = 'キャンセルが押されました';
}
