let maps = [
    {
        id: 'water-com',
        src: 'https://www.google.com/maps/d/embed?mid=1q-dTue0xj5pYNAzkXbiwPtDVGtQdel3A&hl=uk'
    },
    {
        id: 'water-vid',
        src: 'https://www.google.com/maps/d/embed?mid=12Up-0x7yKH9xX9rqHgVOydCa45bzul5I'
    },
    {
        id: 'water-sіl',
        src: 'https://www.google.com/maps/d/embed?mid=1W4VR3Vd6NOBjgjVdh-KuA44HzddDkDkA&hl=uk'
    },
    {
        id: 'water-col',
        src: 'https://www.google.com/maps/d/embed?mid=1pDtBTgWzS5cJ72sG1TUCopOYwbs&hl=uk'
    },
    {
        id: 'elect',
        src: 'https://www.google.com/maps/d/embed?mid=1RIdI2jPMcCuY5UhMzak4JQ2HjGlzAC5e&hl=UK'
    },
    {
        id: 'radio',
        src: 'https://www.google.com/maps/d/embed?mid=1tl_jpjKrZJe6eeSrE2ZNCjsqP7_0gh8s&hl=uk'
    },
    {
        id: 'water-poverh',
        src: 'https://www.google.com/maps/d/embed?mid=1u1VwtJouF6Fd2hWCVezNDF9C6XX0ya9L&hl=uk'
    },
    {
        id: 'atmos-pov',
        src: 'https://www.google.com/maps/d/embed?mid=1doAn6MaoH05EaUunIVUkJwWU0ogPnRS7&hl=uk'
    },
    {
        id: 'acust',
        src: 'https://www.google.com/maps/d/embed?mid=1HAQdbrbnrx79Jpap5u3D0dFmFHXFCQva&hl=uk'
    },
    {
        id: 'grunt',
        src: 'https://www.google.com/maps/d/embed?mid=1O-jYaTin0BampDPsH9pBFHLJLqFbcTmP&hl=uk'
    },
    {
        id: 'epidem-sut',
        src: 'https://www.google.com/maps/d/embed?mid=12Jvzpk6NolD8MJkueDiFTA9ePkpYkkx-&hl=uk'
    },
    {
        id: 'prurod-dzher',
        src: 'https://www.google.com/maps/d/embed?mid=1KV1rozRXj7e2cJ91zb0vm3-A1jTkvUcY&hl=uk'
    }
]

$('.map-change-button').click(function() {
    let mapId = $(this).attr('data-map-id');

    let { src } = maps.find(elem => elem.id === mapId);
    $('#map').attr('src', src);
});