let searchbar=document.getElementById('search-bar');
let searchicon=document.getElementById('search-icon');
searchbar.addEventListener('input',function(){
    if (this.value.trim().length > 0) {
        searchicon.classList.add('hidden');
    } else {
        searchicon.classList.remove('hidden');
    }
});