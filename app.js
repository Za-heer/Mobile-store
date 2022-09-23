let mobiles = {

    iphone: {
        iphone11: {
            Model_Name: ": iphone 11 pro",
            Prize: ": $150",
            Size: ": 7 inch",
            Color: ": gold",
            Camera: ": 10 mp",
            src: ": images/Apple-iphone-11-Pro-Max.jpg"
        },
        iphone12: {
            Model_Name: ": iphone 12 pro",
            Prize: ": $250",
            Size: ": 7.5 inch",
            Color: ": red",
            Camera: ": 20 mp",
            src: ": images/Apple-iphone-11-Pro-Max.jpg"
        },
        iphone13: {
            Model_Name: ": iphone 13 pro",
            Prize: ": $350",
            Size: ": 8 inch",
            Color: ": white",
            Camera: ": 30 mp",
            src: ": images/Apple-iphone-11-Pro-Max.jpg"
        }
    },


    oppo: {
        oppo_Reno: {
            Model_Name: ": oppo_Reno",
            Prize: ": $50",
            Size: ": 7 inch",
            Color: ": gold",
            Camera: ": 10 mp",
            src: ": images/Apple-iphone-11-Pro-Max.jpg"
        },
        oppo_F20: {
            Model_Name: ": oppo_F20",
            Prize: ": $75",
            Size: ": 7.5 inch",
            Color: ": red",
            Camera: ": 20 mp",
            src: ": images/Apple-iphone-11-Pro-Max.jpg"
        },
        oppo_Reno2: {
            Model_Name: ": oppo_Reno2",
            Prize: ": $80",
            Size: ": 8 inch",
            Color: ": white",
            Camera: ": 30 mp",
            src: ": images/Apple-iphone-11-Pro-Max.jpg"
        }
    },

    vivo: {
        X80: {
            Model_Name: ": X80",
            Prize: ": $50",
            Size: ": 7 inch",
            Color: ": blue",
            Camera: ": 10 mp",
            src: ": images/Apple-iphone-11-Pro-Max.jpg"
        },
        V23e: {
            Model_Name: ": V23e",
            Prize: ": $75",
            Size: ": 7.5 inch",
            Color: ": blue",
            Camera: ": 20 mp",
            src: ": images/Apple-iphone-11-Pro-Max.jpg"
        },
        Y33T: {
            Model_Name: ": Y33T",
            Prize: ": $80",
            Size: ": 8 inch",
            Color: ": yellow",
            Camera: ": 30 mp",
            src: ": images/Apple-iphone-11-Pro-Max.jpg"
        }
    }
}


function search(){
    let brand = document.getElementById("brand").value;
    let model = document.getElementById("model").value;
    let get = mobiles[brand][model] 
    for(let k in get){
    let tag = document.createElement('p')
    let span1 = document.createElement('span')
    let span2 = document.createElement('span')
    let text1 = document.createTextNode(k)
    let text2 = document.createTextNode(get[k])
    span1.appendChild(text1)
    span1.setAttribute('class','span1')
    span2.appendChild(text2)
    span2.setAttribute('class','span2')
    tag.appendChild(span1)
    tag.appendChild(span2)
    let parent = document.getElementById('parent')
    parent.appendChild(tag)
};
for(let e in get){
if(mobiles[brand][model]['src']){
    let tag = document.createElement('p')
    let img = document.createElement('img')
    let imge = document.createTextNode(get[e]);
    img.appendChild(imge);
    img.setAttribute('src',get["src"])
    tag.appendChild(img)
    };   

}
    
}