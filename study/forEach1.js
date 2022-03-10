function getNews() {
    let news = [
        { id: 1, title: '지구온난화, 정부 이대로 괜찮은가?' },
        { id: 2, title: '운석이 날라온다. 정부 이대로 괜찮은가?'},
        { id: 3, title: '인공태양이 떠 오른다. 정부 ...'}
    ];

    let newsDatabase = [];

    function saveNews(item) {
        newsDatabase.push(item);
    }
    
    /* 주석 스위치
    // impelative
    console.log('impelative');
    for(var i = 0; i < news.length;i ++) {
        saveNews(news[i]);
    }
    /*/
    // declative
    console.log('declative');

    news.forEach(function(item) {
        saveNews(item);
    })
    //*/
    // news.forEach(item => saveNews(item));
    
    
    console.log(newsDatabase);
    
}

getNews();