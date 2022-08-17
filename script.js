const data = {
    color: 'red',
    width: 400,
    height: 500
};

function func(option) {
    let [color, width, height] = option
    console.log(color, width, height);
};

func(data);