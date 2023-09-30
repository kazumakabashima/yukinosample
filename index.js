// ランダムなカラーコードを生成する関数
function randomColorCode() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const loadScript = () => {
    const btn = document.getElementById('btn');
    const text = document.getElementById('text');
    // カラーコードを格納する配列を初期化
    const colorArray = [];
    // 50個のランダムなカラーコードを生成し、配列に格納
    for (let i = 0; i < 50; i++) {
        colorArray.push(randomColorCode());
    }

    let i = 0;
    
    btn.addEventListener('click', function() {
        // テキストの可視性を切り替え
        text.style.visibility = 'visible';

      // テキストのカラーコードをランダムに変更
        text.style.color = colorArray[i];
      // 次のカラーコードに進む（ループする）
        i = (i + 1) % colorArray.length;
    });
};

// ページのロードが完了したときに実行される関数を登録
window.addEventListener('load', loadScript);
