
$('.locations.index').ready(function(){
  var locationsJson = [];
  for(var i = 0; i < gon.locations.length; i++){
    var location = gon.locations[i];
    locationsJson.push({
      title: location.name,
      imageURL: "/Xaxis_Logo_Pos_Vert.png" ,
      latitude: parseFloat(location.latitude),
      longitude: parseFloat(location.longitude),
      url: '/locations/'+location.slug,
      groups: [location.region.slug],
      centered: true,
      mouseEnabled: true,
      height: '20',
      width: '17'
    });
  }

  AmCharts.addInitHandler( function ( map ) {
    map.mapGroups = {};
    for ( var x in map.dataProvider.areas ) {
      var area = map.dataProvider.areas[ x ];
      if ( undefined !== area.groups && area.groups instanceof Array ) {
        for ( var y in area.groups ) {
          var group = area.groups[ y ];
          if ( undefined === map.mapGroups[ group ] )
            map.mapGroups[ group ] = [];
          map.mapGroups[ group ].push( area );
        }
      }
      for ( var z in map.dataProvider.images ) {
        var image = map.dataProvider.images[ z ];
        if ( undefined !== image.groups && image.groups instanceof Array ) {
          for ( var zz in image.groups ) {
            var imagegroup = image.groups[ zz ];
            if ( undefined === map.mapGroups[ imagegroup ] )
              map.mapGroups[ imagegroup ] = [];
            map.mapGroups[ imagegroup ].push( image );
          }
        }
      }
    }

    map.addListener('drawn', function(){
      $("circle").parent().remove();
    });

    map.addListener('zoomCompleted', function(){
      $("circle").parent().remove();
    });

    map.addListener('init', function(){
      $("circle").parent().remove();
    });

    map.addListener( "rollOverMapObject", rollOverMapObject );
    map.addListener( "rollOutMapObject", rollOutMapObject );

    function rollOverMapObject ( event ) {
      handleHovers( event, "hover" );
    }

    function rollOutMapObject ( event ) {
      handleHovers( event, "blur" );
    }

    function handleHovers( event, type ) {
      var area = event.mapObject;
      if ( undefined === area.groups || !(area.groups instanceof Array) )
        return;
      for ( var y in area.groups ) {
        var group = area.groups[ y ];
        for ( var x in map.mapGroups[ group ] ) {
          var relatedArea = map.mapGroups[ group ][ x ];
          if ( relatedArea.id === area.id || area.hasOwnProperty('imageUrl')){
            continue;
          }
          if ( "blur" === type ) {
            relatedArea.showAsSelected = false;
            map.returnInitialColor( relatedArea );
            $("g[aria-label=\""+relatedArea.title+" \"] image").attr('src', 'stuff');
          }
          else {
            relatedArea.showAsSelected = true;
            map.returnInitialColor( relatedArea );
            $("g[aria-label=\""+relatedArea.title+" \"] image").attr('x-link:href', 'stuff');
          }
        }
      }
    }
  }, [ 'map'] );

  var map = AmCharts.makeChart("mapdiv", {
    type: "map",
    "theme": "none",
    projection: 'miller',
    pathToImages: '/images',
    fontFamily: 'Gotham-Book',
    dragMap: false,
    zoomOnDoubleClick: false,
    areasSettings: {
      autoZoom: false,
      color: '#DFDFDF',
      rollOverColor: '#808080',
      selectedColor: '#808080',
      rollOverOutlineColor: "#FFFFFF",
      alpha:0.8,
      unlistedAreasAlpha:0.5,
      balloonText: "[[customData]]"
    },
    zoomControl: {
		    zoomControlEnabled: false,
    },
    imagesSettings: {
      rollOverOutlineColor: "#FFFFFF",
    },
    allowClickOnSelectedObject: true,
      dataProvider: {
        map: "worldLow",
        rollOverColor: '#00AFEF',
        images: locationsJson,
        areas: [
          {
              id: 'AF',
              title: 'Afghanistan',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific',
          },
          {
              id: 'AX',
              title: 'Aland Islands',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'AL',
              title: 'Albania',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east',
          },
          {
              id: 'DZ',
              title: 'Algeria',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'AS',
              title: 'American Samoa',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'AD',
              title: 'Andorra',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'AO',
              title: 'Angola',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'AI',
              title: 'Anguilla'
          },
          {
              id: 'AQ',
              title: 'Antarctica',
          },
          {
              id: 'AG',
              title: 'Antigua And Barbuda',
          },
          {
              id: 'AR',
              title: 'Argentina',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'AM',
              title: 'Armenia',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'AW',
              title: 'Aruba',
          },
          {
              id: 'AU',
              title: 'Australia',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'AT',
              title: 'Austria',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'AZ',
              title: 'Azerbaijan',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'BS',
              title: 'Bahamas',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'BH',
              title: 'Bahrain',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'BD',
              title: 'Bangladesh',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'BB',
              title: 'Barbados',
          },
          {
              id: 'BY',
              title: 'Belarus',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'BE',
              title: 'Belgium',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'BZ',
              title: 'Belize',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'BJ',
              title: 'Benin',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'BM',
              title: 'Bermuda',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'BT',
              title: 'Bhutan',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'BO',
              title: 'Bolivia',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'BA',
              title: 'Bosnia And Herzegovina',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'BW',
              title: 'Botswana',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'BV',
              title: 'Bouvet Island',
          },
          {
              id: 'BR',
              title: 'Brazil',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'IO',
              title: 'British Indian Ocean Territory',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'BN',
              title: 'Brunei Darussalam',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'BG',
              title: 'Bulgaria',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'BF',
              title: 'Burkina Faso',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'BI',
              title: 'Burundi',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'KH',
              title: 'Cambodia',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'CM',
              title: 'Cameroon',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'CA',
              title: 'Canada',
              groups: ["north-america"],
              customData: ["North America"],
              url: '/regions/north-america'
          },
          {
              id: 'CV',
              title: 'Cape Verde',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'KY',
              title: 'Cayman Islands',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'CF',
              title: 'Central African Republic',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'TD',
              title: 'Chad',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'CL',
              title: 'Chile',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'CN',
              title: 'China',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'CX',
              title: 'Christmas Island',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'CC',
              title: 'Cocos (Keeling) Islands',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'CO',
              title: 'Colombia',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'KM',
              title: 'Comoros',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'CG',
              title: 'Congo',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'CD',
              title: 'Congo, Democratic Republic',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
            },
          {
              id: 'CK',
              title: 'Cook Islands',
          },
          {
              id: 'CR',
              title: 'Costa Rica',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'CI',
              title: 'Cote D\'Ivoire',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'HR',
              title: 'Croatia',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'CU',
              title: 'Cuba',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'CY',
              title: 'Cyprus',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'CZ',
              title: 'Czech Republic',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'DK',
              title: 'Denmark',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'DJ',
              title: 'Djibouti',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'DM',
              title: 'Dominica',
          },
          {
              id: 'DO',
              title: 'Dominican Republic',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'EC',
              title: 'Ecuador',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'EG',
              title: 'Egypt',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'SV',
              title: 'El Salvador',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'GQ',
              title: 'Equatorial Guinea',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'ER',
              title: 'Eritrea',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'EE',
              title: 'Estonia',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'ET',
              title: 'Ethiopia',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'FK',
              title: 'Falkland Islands (Malvinas)',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'FO',
              title: 'Faroe Islands',
          },
          {
              id: 'FJ',
              title: 'Fiji',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'FI',
              title: 'Finland',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'FR',
              title: 'France',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'GF',
              title: 'French Guiana',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'PF',
              title: 'French Polynesia',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'TF',
              title: 'French Southern Territories',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'GA',
              title: 'Gabon',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'GM',
              title: 'Gambia',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'GE',
              title: 'Georgia',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'DE',
              title: 'Germany',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'GH',
              title: 'Ghana',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'GI',
              title: 'Gibraltar',
          },
          {
              id: 'GR',
              title: 'Greece',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'GL',
              title: 'Greenland',
              groups: ["north-america"],
              customData: ["North America"],
              url: '/regions/north-america'
          },
          {
              id: 'GD',
              title: 'Grenada',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'GP',
              title: 'Guadeloupe',
          },
          {
              id: 'GU',
              title: 'Guam',
          },
          {
              id: 'GT',
              title: 'Guatemala',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'GG',
              title: 'Guernsey',
          },
          {
              id: 'GN',
              title: 'Guinea',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'GW',
              title: 'Guinea-Bissau',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'GY',
              title: 'Guyana',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'HT',
              title: 'Haiti',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'HM',
              title: 'Heard Island & Mcdonald Islands',
          },
          {
              id: 'VA',
              title: 'Vatican City',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'HN',
              title: 'Honduras',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'HK',
              title: 'Hong Kong',
          },
          {
              id: 'HU',
              title: 'Hungary',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'IS',
              title: 'Iceland',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'IN',
              title: 'India',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'ID',
              title: 'Indonesia',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'IR',
              title: 'Iran, Islamic Republic Of',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'IQ',
              title: 'Iraq',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'IE',
              title: 'Ireland',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'IM',
              title: 'Isle Of Man',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'IL',
              title: 'Israel',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'IT',
              title: 'Italy',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'JM',
              title: 'Jamaica',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'JP',
              title: 'Japan',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'JE',
              title: 'Jersey',
          },
          {
              id: 'JO',
              title: 'Jordan',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'KZ',
              title: 'Kazakhstan',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'KE',
              title: 'Kenya',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'KI',
              title: 'Kiribati',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'KR',
              title: 'South Korea',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'KP',
              title: 'North Korea',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'XK',
              title: 'Kosovo',
              groups: ['europe-middle-east'],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'KW',
              title: 'Kuwait',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'KG',
              title: 'Kyrgyzstan',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'LA',
              title: 'Lao People\'s Democratic Republic',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'LV',
              title: 'Latvia',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'LB',
              title: 'Lebanon',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'LS',
              title: 'Lesotho',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'LR',
              title: 'Liberia',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'LY',
              title: 'Libyan Arab Jamahiriya',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'LI',
              title: 'Liechtenstein',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'LT',
              title: 'Lithuania',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'LU',
              title: 'Luxembourg',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'MO',
              title: 'Macao',
          },
          {
              id: 'MK',
              title: 'Macedonia',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'MG',
              title: 'Madagascar',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'MW',
              title: 'Malawi',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'MY',
              title: 'Malaysia',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'MV',
              title: 'Maldives',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'ML',
              title: 'Mali',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'MT',
              title: 'Malta',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'MH',
              title: 'Marshall Islands',
          },
          {
              id: 'MQ',
              title: 'Martinique',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'MR',
              title: 'Mauritania',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'MU',
              title: 'Mauritius',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'YT',
              title: 'Mayotte',
          },
          {
              id: 'MX',
              title: 'Mexico',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'FM',
              title: 'Micronesia, Federated States Of',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
            },
          {
              id: 'MD',
              title: 'Moldova',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'MC',
              title: 'Monaco',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'MN',
              title: 'Mongolia',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'ME',
              title: 'Montenegro',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'MS',
              title: 'Montserrat',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'MA',
              title: 'Morocco',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'MZ',
              title: 'Mozambique',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'MM',
              title: 'Myanmar',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'NA',
              title: 'Namibia',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'NR',
              title: 'Nauru',
          },
          {
              id: 'NP',
              title: 'Nepal',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'NL',
              title: 'Netherlands',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'AN',
              title: 'Netherlands Antilles',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'NC',
              title: 'New Caledonia',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'NZ',
              title: 'New Zealand',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'NI',
              title: 'Nicaragua',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'NE',
              title: 'Niger',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'NG',
              title: 'Nigeria',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'NU',
              title: 'Niue',
          },
          {
              id: 'NF',
              title: 'Norfolk Island',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'MP',
              title: 'Northern Mariana Islands',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'NO',
              title: 'Norway',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'OM',
              title: 'Oman',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'PK',
              title: 'Pakistan',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'PW',
              title: 'Palau',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'PS',
              title: 'Palestinian Territory, Occuipied',
            },
          {
              id: 'PA',
              title: 'Panama',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'PG',
              title: 'Papua New Guinea',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'PY',
              title: 'Paraguay',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'PE',
              title: 'Peru',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'PH',
              title: 'Philippines',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'PN',
              title: 'Pitcairn',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'PL',
              title: 'Poland',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'PT',
              title: 'Portugal',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'PR',
              title: 'Puerto Rico',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'QA',
              title: 'Qatar',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'RE',
              title: 'Reunion',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'RO',
              title: 'Romania',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'RU',
              title: 'Russia',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'RW',
              title: 'Rwanda',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'BL',
              title: 'Saint Barthelemy',
          },
          {
              id: 'SH',
              title: 'Saint Helena',
          },
          {
              id: 'KN',
              title: 'Saint Kitts And Nevis',
          },
          {
              id: 'LC',
              title: 'Saint Lucia',
          },
          {
              id: 'MF',
              title: 'Saint Martin',
          },
          {
              id: 'PM',
              title: 'Saint Pierre And Miquelon',
          },
          {
              id: 'VC',
              title: 'Saint Vincent And Grenadines',
          },
          {
              id: 'WS',
              title: 'Samoa',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'SM',
              title: 'San Marino',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'ST',
              title: 'Sao Tome And Principe',
          },
          {
              id: 'SA',
              title: 'Saudi Arabia',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'SN',
              title: 'Senegal',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'RS',
              title: 'Serbia',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'SC',
              title: 'Seychelles',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'SL',
              title: 'Sierra Leone',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'SG',
              title: 'Singapore',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'SK',
              title: 'Slovakia',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'SI',
              title: 'Slovenia',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'SB',
              title: 'Solomon Islands',
          },
          {
              id: 'SO',
              title: 'Somalia',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'ZA',
              title: 'South Africa',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'GS',
              title: 'South Georgia And Sandwich Isl.',
          },
          {
              id: 'ES',
              title: 'Spain',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'LK',
              title: 'Sri Lanka',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'SS',
              title: 'SouthSudan',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'SD',
              title: 'Sudan',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'SR',
              title: 'Suriname',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'SJ',
              title: 'Svalbard And Jan Mayen',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'SZ',
              title: 'Swaziland',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'SE',
              title: 'Sweden',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'CH',
              title: 'Switzerland',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'SY',
              title: 'Syrian Arab Republic',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'TW',
              title: 'Taiwan',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'TJ',
              title: 'Tajikistan',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'TZ',
              title: 'Tanzania',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'TH',
              title: 'Thailand',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'TL',
              title: 'Timor-Leste',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'TG',
              title: 'Togo',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'TK',
              title: 'Tokelau',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'TO',
              title: 'Tonga',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'TT',
              title: 'Trinidad And Tobago',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'TN',
              title: 'Tunisia',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'TR',
              title: 'Turkey',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'TM',
              title: 'Turkmenistan',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'TC',
              title: 'Turks And Caicos Islands',
          },
          {
              id: 'TV',
              title: 'Tuvalu',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'UG',
              title: 'Uganda',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'UA',
              title: 'Ukraine',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'AE',
              title: 'United Arab Emirates',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'GB',
              title: 'United Kingdom',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'US',
              title: 'United States',
              groups: ["north-america"],
              customData: ["North America"],
              url: '/regions/north-america',
          },
          {
              id: 'UM',
              title: 'United States Outlying Islands',
          },
          {
              id: 'UY',
              title: 'Uruguay',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'UZ',
              title: 'Uzbekistan',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'VU',
              title: 'Vanuatu',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'VE',
              title: 'Venezuela',
              groups: ["latin-america"],
              customData: ["Latin America"],
              url: '/regions/latin-america',
          },
          {
              id: 'VN',
              title: 'Viet Nam',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'VG',
              title: 'Virgin Islands, British'
            },
          {
              id: 'VI',
              title: 'Virgin Islands, U.S.',
          },
          {
              id: 'WF',
              title: 'Wallis And Futuna',
              groups: ['asia-pacific'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'EH',
              title: 'Western Sahara',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'YE',
              title: 'Yemen',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'ZM',
              title: 'Zambia',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'ZW',
              title: 'Zimbabwe',
              groups: ["europe-middle-east"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          }
        ]
      }

  });

});
