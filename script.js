var IsLogedIn = false;

function downloadFile() {
    if (IsLogedIn = true) {
        const link = document.createElement("a");
        link.href = "download.txt";
        link.download = "download.txt";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        function showToast(message) {
            const toast = document.getElementById("toast");
            toast.textContent = message;
            toast.className = "show";
            setTimeout(() => {toast.className = toast.className.replace("show", "");}, 3000); // Toast will disappear after 3 seconds
        }   
    }

}