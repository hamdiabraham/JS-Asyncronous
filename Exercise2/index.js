const flagApi = async () => {
  try {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await res.json();
    let bendera = "";
    data.forEach((el) => {
      bendera += flag(el);
    });
    document.getElementById("root").innerHTML = bendera;
  } catch (error) {
    console.log(error);
  }
};

flagApi();

const flag = (data) => {
  return `<div class="container">
            <div class="row">
              <div class="col">
                <img src="${data.flag}" alt="" />
                <div>${data.name}</div>
              </div>
            </div>
          </div>`;
};
