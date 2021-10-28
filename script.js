$(function(){
    // constants
    const BASE_URL = 'https://quickchart.io/wordcloud';

    // variables
    let cloudData;
    let text;
    let fontFamily;
    let padding;
    let minWordLength;
    let removeStopWords = false;
    
    // cached element references
    const $main = $('main');

    // functions

    $.ajax({
        url: `${BASE_URL}?text=${text}&fontFamily=helvetica&padding=3&minWordLength=2&removeStopwords=true`,
        dataType: 'html',
        success: function(data) {  
            cloudData = data;       
            render();
        }
    });
    
    function render() {
        console.log(cloudData);
        $main.append(cloudData);
    }
});

// compare word clouds with each other?
// upload files to be analyzed instead of inputting text by typing?