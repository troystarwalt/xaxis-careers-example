$('.locations.index').ready(function(){
  AmCharts.addInitHandler( function ( map ) {
    map.mapGroups = {};
    for ( var x in map.dataProvider.areas ) {
      var area = map.dataProvider.areas[ x ];
      if ( undefined !== area.groups && area.groups instanceof Array ) {
        // collect information about groups
        for ( var y in area.groups ) {
          var group = area.groups[ y ];
          if ( undefined === map.mapGroups[ group ] )
            map.mapGroups[ group ] = [];
          map.mapGroups[ group ].push( area );
        }
      }
    }

    map.addListener( "rollOverMapObject", rollOverMapObject );
    map.addListener( "rollOutMapObject", rollOutMapObject );

    function rollOverMapObject ( event ) {
      handleHovers( event, "hover" );
    }

    function rollOutMapObject ( event ) {
      handleHovers( event, "blur" );
    }

    function handleHovers( event, type ) {
      // check if this area has related items defined
      var area = event.mapObject;
      if ( undefined === area.groups || !(area.groups instanceof Array) )
        return;
      for ( var y in area.groups ) {
        var group = area.groups[ y ];
        for ( var x in map.mapGroups[ group ] ) {
          var relatedArea = map.mapGroups[ group ][ x ];
          if ( relatedArea.id === area.id )
            continue;
          if ( "blur" === type ) {
            relatedArea.showAsSelected = false;
            map.returnInitialColor( relatedArea );
          }
          else {
            relatedArea.showAsSelected = true;
            map.returnInitialColor( relatedArea );
          }
        }
      }
    }

  }, [ 'map'] );

  var map = AmCharts.makeChart("mapdiv", {
    type: "map",
    "theme": "none",
    projection: 'miller',
    areasSettings: {
      autoZoom: false,
      color: '#DFDFDF',
      rollOverColor: '#00AFEF',
      selectedColor: '#00AFEF',
      rollOverOutlineColor: "#FFFFFF",
      alpha:0.8,
      unlistedAreasAlpha:0.5,
      balloonText: "[[customData]]"
    },
    imagesSettings: {
      rollOverColor: "#089282",
      rollOverScale: 3,
      selectedScale: 3,
      selectedColor: "#089282",
      color: "#13564e"
    },

    pathToImages: "http://www.amcharts.com/lib/3/images/",
    allowClickOnSelectedObject: true,
      dataProvider: {
        map: "worldLow",
        rollOverColor: '#00AFEF',
        selectedColor: '#00AFEF',
        areas: [
          {
              id: 'AF',
              title: 'Afghanistan',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific',
          },
          {
              id: 'AX',
              title: 'Aland Islands',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'AL',
              title: 'Albania',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east',
          },
          {
              id: 'DZ',
              title: 'Algeria',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'AS',
              title: 'American Samoa',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'AD',
              title: 'Andorra',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'AO',
              title: 'Angola',
              groups: ["EMEA"],
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
              groups: ["LATAM"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'AM',
              title: 'Armenia',
              groups: ["EMEA"],
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
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'AT',
              title: 'Austria',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'AZ',
              title: 'Azerbaijan',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'BS',
              title: 'Bahamas',
              groups: ["LATAM"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'BH',
              title: 'Bahrain',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'BD',
              title: 'Bangladesh',
              groups: ['APAC'],
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
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'BE',
              title: 'Belgium',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'BZ',
              title: 'Belize',
              groups: ["LATAM"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'BJ',
              title: 'Benin',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'BM',
              title: 'Bermuda',
              groups: ["LATAM"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'BT',
              title: 'Bhutan',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'BO',
              title: 'Bolivia',
              groups: ["LATAM"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'BA',
              title: 'Bosnia And Herzegovina',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'BW',
              title: 'Botswana',
              groups: ["EMEA"],
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
              groups: ["LATAM"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'IO',
              title: 'British Indian Ocean Territory',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'BN',
              title: 'Brunei Darussalam',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'BG',
              title: 'Bulgaria',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'BF',
              title: 'Burkina Faso',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'BI',
              title: 'Burundi',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'KH',
              title: 'Cambodia',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'CM',
              title: 'Cameroon',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'CA',
              title: 'Canada',
              groups: ["NA"],
              customData: ["North America"],
              url: '/regions/north-america'
          },
          {
              id: 'CV',
              title: 'Cape Verde',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'KY',
              title: 'Cayman Islands',
              groups: ["LATAM"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'CF',
              title: 'Central African Republic',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'TD',
              title: 'Chad',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'CL',
              title: 'Chile',
              groups: ["LATAM"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'CN',
              title: 'China',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'CX',
              title: 'Christmas Island',
              groups: ["LATAM"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'CC',
              title: 'Cocos (Keeling) Islands',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'CO',
              title: 'Colombia',
              groups: ["LATAM"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'KM',
              title: 'Comoros',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'CG',
              title: 'Congo',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'CD',
              title: 'Congo, Democratic Republic',
              groups: ["EMEA"],
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
              groups: ["LATAM"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'CI',
              title: 'Cote D\'Ivoire',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'HR',
              title: 'Croatia',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'CU',
              title: 'Cuba',
              groups: ["LATAM"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'CY',
              title: 'Cyprus',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'CZ',
              title: 'Czech Republic',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'DK',
              title: 'Denmark',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'DJ',
              title: 'Djibouti',
              groups: ["EMEA"],
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
              groups: ["LATAM"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'EC',
              title: 'Ecuador',
              groups: ["LATAM"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'EG',
              title: 'Egypt',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'SV',
              title: 'El Salvador',
              groups: ["LATAM"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'GQ',
              title: 'Equatorial Guinea',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'ER',
              title: 'Eritrea',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'EE',
              title: 'Estonia',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'ET',
              title: 'Ethiopia',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'FK',
              title: 'Falkland Islands (Malvinas)',
              groups: ["LATAM"],
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
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'FI',
              title: 'Finland',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'FR',
              title: 'France',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'GF',
              title: 'French Guiana',
              groups: ["LATAM"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'PF',
              title: 'French Polynesia',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'TF',
              title: 'French Southern Territories',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'GA',
              title: 'Gabon',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'GM',
              title: 'Gambia',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'GE',
              title: 'Georgia',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'DE',
              title: 'Germany',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'GH',
              title: 'Ghana',
              groups: ["EMEA"],
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
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'GL',
              title: 'Greenland'
          },
          {
              id: 'GD',
              title: 'Grenada',
              groups: ["LATAM"],
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
              groups: ["LATAM"],
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
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'GW',
              title: 'Guinea-Bissau',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'GY',
              title: 'Guyana',
              groups: ["LATAM"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'HT',
              title: 'Haiti',
              groups: ["LATAM"],
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
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'HN',
              title: 'Honduras',
              groups: ["LATAM"],
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
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'IS',
              title: 'Iceland',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'IN',
              title: 'India',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'ID',
              title: 'Indonesia',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'IR',
              title: 'Iran, Islamic Republic Of',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'IQ',
              title: 'Iraq',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'IE',
              title: 'Ireland',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'IM',
              title: 'Isle Of Man',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'IL',
              title: 'Israel',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'IT',
              title: 'Italy',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'JM',
              title: 'Jamaica',
              groups: ["LATAM"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'JP',
              title: 'Japan',
              groups: ['APAC'],
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
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'KZ',
              title: 'Kazakhstan',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'KE',
              title: 'Kenya',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'KI',
              title: 'Kiribati',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'KR',
              title: 'South Korea',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'KP',
              title: 'North Korea',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'XK',
              title: 'Kosovo',
              groups: ['EMEA'],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'KW',
              title: 'Kuwait',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'KG',
              title: 'Kyrgyzstan',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'LA',
              title: 'Lao People\'s Democratic Republic',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'LV',
              title: 'Latvia',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'LB',
              title: 'Lebanon',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'LS',
              title: 'Lesotho',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'LR',
              title: 'Liberia',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'LY',
              title: 'Libyan Arab Jamahiriya',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'LI',
              title: 'Liechtenstein',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'LT',
              title: 'Lithuania',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'LU',
              title: 'Luxembourg',
              groups: ["EMEA"],
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
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'MG',
              title: 'Madagascar',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'MW',
              title: 'Malawi',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'MY',
              title: 'Malaysia',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'MV',
              title: 'Maldives',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'ML',
              title: 'Mali',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'MT',
              title: 'Malta',
              groups: ["EMEA"],
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
              groups: ["LATAM"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'MR',
              title: 'Mauritania',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'MU',
              title: 'Mauritius',
              groups: ["EMEA"],
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
              groups: ["LATAM"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'FM',
              title: 'Micronesia, Federated States Of',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
            },
          {
              id: 'MD',
              title: 'Moldova',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'MC',
              title: 'Monaco',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'MN',
              title: 'Mongolia',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'ME',
              title: 'Montenegro',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'MS',
              title: 'Montserrat',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'MA',
              title: 'Morocco',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'MZ',
              title: 'Mozambique',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'MM',
              title: 'Myanmar',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'NA',
              title: 'Namibia',
              groups: ["EMEA"],
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
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'NL',
              title: 'Netherlands',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'AN',
              title: 'Netherlands Antilles',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'NC',
              title: 'New Caledonia',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'NZ',
              title: 'New Zealand',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'NI',
              title: 'Nicaragua',
              groups: ["LATAM"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'NE',
              title: 'Niger',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'NG',
              title: 'Nigeria',
              groups: ["EMEA"],
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
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'MP',
              title: 'Northern Mariana Islands',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'NO',
              title: 'Norway',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'OM',
              title: 'Oman',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'PK',
              title: 'Pakistan',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'PW',
              title: 'Palau',
              groups: ["EMEA"],
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
              groups: ["LATAM"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'PG',
              title: 'Papua New Guinea',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'PY',
              title: 'Paraguay',
              groups: ["LATAM"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'PE',
              title: 'Peru',
              groups: ["LATAM"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'PH',
              title: 'Philippines',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'PN',
              title: 'Pitcairn',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'PL',
              title: 'Poland',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'PT',
              title: 'Portugal',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'PR',
              title: 'Puerto Rico',
              groups: ["LATAM"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'QA',
              title: 'Qatar',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'RE',
              title: 'Reunion',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'RO',
              title: 'Romania',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'RU',
              title: 'Russia',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'RW',
              title: 'Rwanda',
              groups: ["EMEA"],
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
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'SM',
              title: 'San Marino',
              groups: ["EMEA"],
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
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'SN',
              title: 'Senegal',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'RS',
              title: 'Serbia',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'SC',
              title: 'Seychelles',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'SL',
              title: 'Sierra Leone',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'SG',
              title: 'Singapore',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'SK',
              title: 'Slovakia',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'SI',
              title: 'Slovenia',
              groups: ["EMEA"],
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
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'ZA',
              title: 'South Africa',
              groups: ["EMEA"],
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
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'LK',
              title: 'Sri Lanka',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'SS',
              title: 'SouthSudan',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'SD',
              title: 'Sudan',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'SR',
              title: 'Suriname',
              groups: ["LATAM"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'SJ',
              title: 'Svalbard And Jan Mayen',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'SZ',
              title: 'Swaziland',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'SE',
              title: 'Sweden',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'CH',
              title: 'Switzerland',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'SY',
              title: 'Syrian Arab Republic',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'TW',
              title: 'Taiwan',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'TJ',
              title: 'Tajikistan',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'TZ',
              title: 'Tanzania',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'TH',
              title: 'Thailand',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'TL',
              title: 'Timor-Leste',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'TG',
              title: 'Togo',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'TK',
              title: 'Tokelau',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'TO',
              title: 'Tonga',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'TT',
              title: 'Trinidad And Tobago',
              groups: ["LATAM"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'TN',
              title: 'Tunisia',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'TR',
              title: 'Turkey',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'TM',
              title: 'Turkmenistan',
              groups: ['APAC'],
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
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'UG',
              title: 'Uganda',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'UA',
              title: 'Ukraine',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'AE',
              title: 'United Arab Emirates',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'GB',
              title: 'United Kingdom',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'US',
              title: 'United States',
              groups: ["NA"],
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
              groups: ["LATAM"],
              customData: ["Latin America"],
              url: '/regions/latin-america'
          },
          {
              id: 'UZ',
              title: 'Uzbekistan',
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'VU',
              title: 'Vanuatu',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'VE',
              title: 'Venezuela',
              groups: ["LATAM"],
              customData: ["Latin America"],
              url: '/regions/latin-america',
          },
          {
              id: 'VN',
              title: 'Viet Nam',
              groups: ['APAC'],
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
              groups: ['APAC'],
              customData: ["Asia Pacific"],
              url: '/regions/asia-pacific'
          },
          {
              id: 'EH',
              title: 'Western Sahara',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'YE',
              title: 'Yemen',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'ZM',
              title: 'Zambia',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          },
          {
              id: 'ZW',
              title: 'Zimbabwe',
              groups: ["EMEA"],
              customData: ["Europe, Middle East and Africa"],
              url: '/regions/europe-middle-east'
          }
        ]
      }
  });
});
