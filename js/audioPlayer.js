var x = new XMLHttpRequest();
x.open("GET", "https://anchor.fm/s/17bf4430/podcast/rss", true);
x.onreadystatechange = function () {
    if (x.readyState == 4 && x.status == 200) {
        var doc = x.responseXML;
        var channels = doc.getElementsByTagName("channel")[0].getElementsByTagName("item");
        for (let index = 0; index < 1; index++) {
            const title = channels[index].children[0].textContent;
            const creator = channels[index].children[4].textContent;
            const enclosure = channels[index].children[6].attributes[0].nodeValue;
            const image = channels[index].children[10].attributes[0].nodeValue;
            document.getElementById("cover").src = image;
            document.getElementById("audio").src = enclosure;
            document.getElementById("audio").type = 'audio/mp3';
            
            madeBy.innerText = creator;
            audioTitle.innerText = title;
        }
    }
    var audio = {
        init: function () {
            var $that = this;
            $(function () {
                $that.components.media();
            });
        },
        components: {
            media: function (target) {
                var media = $('audio.fc-media', (target !== undefined) ? target : 'body');
                if (media.length) {
                    media.mediaelementplayer({
                        audioHeight: 40,
                        features: ['playpause', 'current', 'duration', 'progress', 'volume', 'tracks', 'fullscreen'],
                        alwaysShowControls: true,
                        timeAndDurationSeparator: '<span></span>',
                        iPadUseNativeControls: true,
                        iPhoneUseNativeControls: true,
                        AndroidUseNativeControls: true
                    });
                }
            },

        },
    };
    audio.init();
};
x.send(null);

