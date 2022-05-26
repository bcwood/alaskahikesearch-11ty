function map_init(long, lat, zoom) {
                        mapboxgl.accessToken = 'pk.eyJ1IjoiYWxhc2thaGlrZXNlYXJjaCIsImEiOiJjazMyZTBkOHUwYmF1M21wb2IyaGdmdGw2In0.-lntVRf_FQOBjpntdQA8HQ';
                        var map = new mapboxgl.Map({
                            container: 'map',
                            style: 'mapbox://styles/mapbox/outdoors-v11',
                            center: [long, lat],
                            zoom: zoom
                        });
                        return map;
                }
                function setup_map_events(map) {
                    map.on('click', 'places', function(e) {
                        var coordinates = e.features[0].geometry.coordinates.slice();
                        var description = e.features[0].properties.description;

                        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                        }

                        new mapboxgl.Popup()
                            .setLngLat(coordinates)
                            .setHTML(description)
                            .addTo(map);
                    });

                    map.on('mouseenter', 'places', function() {
                        map.getCanvas().style.cursor = 'pointer';
                    });

                    map.on('mouseleave', 'places', function() {
                        map.getCanvas().style.cursor = '';
                    });
                }
            
function map_home() {
                    var map = map_init(-147.7658421, 61.7779049, 5.9); /* Matanuska Glacier */
                     
                    map.on('load', function () {
                        map.loadImage('/img/map-pin.png', function (error, image) {
                            if (error) throw error;
                            map.addImage('pin', image);

                             map.addLayer({
                                'id': 'places',
                                'type': 'symbol',
                                'source': {
                                    'type': 'geojson',
                                    'data': {
                                        'type': 'FeatureCollection',
                                        'features': [
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Mt. Baldy Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/mt-baldy'>Mt. Baldy</a></li><li><a href='./hikes/black-tail-rocks'>Black Tail Rocks</a></li><li><a href='./hikes/round-top'>Round Top</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.5116133, 61.3380357]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Mile Hi Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/mt-magnificent'>Mt. Magnificent</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.4651135, 61.3135182]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Eagle River Nature Center</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/crow-pass'>Crow Pass</a></li><li><a href='./hikes/dew-mound-trail'>Dew Mound Trail</a></li><li><a href='./hikes/eagle-river'>Eagle River</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.2711197, 61.2342489]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Glen Alps Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/flat-top'>Flat Top</a></li><li><a href='./hikes/football-field-omalley-peak'>Football Field / O'Malley Peak</a></li><li><a href='./hikes/hidden-valley'>Hidden Valley</a></li><li><a href='./hikes/powerline-pass'>Powerline Pass</a></li><li><a href='./hikes/ptarmigan-peak'>Ptarmigan Peak</a></li><li><a href='./hikes/ship-lake-valley'>Ship Lake Valley</a></li><li><a href='./hikes/williwaw-lakes'>Williwaw Lakes</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.6831682, 61.1030702]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Prospect Heights Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/campbell-creek-canyon-trail'>Campbell Creek Canyon Trail</a></li><li><a href='./hikes/near-point'>Near Point</a></li><li><a href='./hikes/powerline-pass'>Powerline Pass</a></li><li><a href='./hikes/ptarmigan-peak'>Ptarmigan Peak</a></li><li><a href='./hikes/south-fork-rim-trail'>South Fork Rim Trail</a></li><li><a href='./hikes/tanaina-lake'>Tanaina Lake</a></li><li><a href='./hikes/tkishla-peak'>T'Kishla Peak</a></li><li><a href='./hikes/williwaw-lakes'>Williwaw Lakes</a></li><li><a href='./hikes/wolverine-peak'>Wolverine Peak</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.7108881, 61.1389031]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Campbell Airstrip Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/campbell-creek-tract-bicentennial-park'>Campbell Creek Tract - Bicentennial Park</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.7657098, 61.165846]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Campbell Creek Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/campbell-creek-tract-bicentennial-park'>Campbell Creek Tract - Bicentennial Park</a></li><li><a href='./hikes/anchorage-greenbelt-trails'>Anchorage Greenbelt Trails</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.7961653, 61.1776439]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Hilltop Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/campbell-creek-tract-bicentennial-park'>Campbell Creek Tract - Bicentennial Park</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.7531918, 61.1379331]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>North Bivouac Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/campbell-creek-tract-bicentennial-park'>Campbell Creek Tract - Bicentennial Park</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.7375792, 61.1543049]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>South Bivouac Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/campbell-creek-tract-bicentennial-park'>Campbell Creek Tract - Bicentennial Park</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.7378048, 61.153196]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Basher Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/basher-trail'>Basher Trail</a></li><li><a href='./hikes/campbell-creek-tract-bicentennial-park'>Campbell Creek Tract - Bicentennial Park</a></li><li><a href='./hikes/campbell-creek-canyon-trail'>Campbell Creek Canyon Trail</a></li><li><a href='./hikes/near-point'>Near Point</a></li><li><a href='./hikes/tanaina-lake'>Tanaina Lake</a></li><li><a href='./hikes/tkishla-peak'>T'Kishla Peak</a></li><li><a href='./hikes/wolverine-peak'>Wolverine Peak</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.7143492, 61.1515809]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Klutina Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/knoya-peak'>Knoya Peak</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.7212225, 61.1809226]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Crow Pass Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/crow-pass'>Crow Pass</a></li><li><a href='./hikes/grizzly-bear-lake'>Grizzly Bear Lake</a></li><li><a href='./hikes/jewell-glacier'>Jewell Glacier</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.1161674, 61.0281201]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>McHugh Creek Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/mchugh-trail-rabbit-lake'>McHugh Trail / Rabbit Lake</a></li><li><a href='./hikes/mchugh-peak'>McHugh Peak</a></li><li><a href='./hikes/turnagain-arm-trail'>Turnagain Arm Trail</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.7315773, 61.0179272]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Rainbow Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/rainbow-peak'>Rainbow Peak</a></li><li><a href='./hikes/turnagain-arm-trail'>Turnagain Arm Trail</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.640578, 60.9999982]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Falls Creek Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/falls-creek-trail'>Falls Creek Trail</a></li><li><a href='./hikes/indianhouse-mountain'>Indianhouse Mountain</a></li><li><a href='./hikes/suicide-peaks'>Suicide Peaks</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.5762637, 60.9840998]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Bird Ridge Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/bird-creek-trail'>Bird Creek Trail</a></li><li><a href='./hikes/bird-ridge'>Bird Ridge</a></li><li><a href='./hikes/bird-ridge-tarns'>Bird Ridge Tarns</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.4799335, 60.978935]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Bird to Gird Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/seward-highway-turnagain-arm'>Seward Highway / Turnagain Arm</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.1771283, 60.9452122]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Alyeska Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/alyeska-north-face'>Alyeska North Face</a></li><li><a href='./hikes/alyeska-roundhouse'>Alyeska Roundhouse</a></li><li><a href='./hikes/upper-winner-creek-trail'>Upper Winner Creek Trail</a></li><li><a href='./hikes/winner-creek'>Winner Creek</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.0952829, 60.9697352]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Gull Rock Trail</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/gull-rock-trail'>Gull Rock Trail</a></li><li><a href='./hikes/hope-point'>Hope Point</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.6645777, 60.9257762]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Potter Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/turnagain-arm-trail'>Turnagain Arm Trail</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.7922744, 61.0480013]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Rabbit Lake Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/mchugh-trail-rabbit-lake'>McHugh Trail / Rabbit Lake</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.6780712, 61.0795745]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Goose Lake Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/anchorage-greenbelt-trails'>Anchorage Greenbelt Trails</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.8214782, 61.1970637]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Russian Jack Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/anchorage-greenbelt-trails'>Anchorage Greenbelt Trails</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.7795995, 61.2066386]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Westchester Lagoon Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/tony-knowles-coastal-trail'>Tony Knowles Coastal Trail</a></li><li><a href='./hikes/anchorage-greenbelt-trails'>Anchorage Greenbelt Trails</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.9228354, 61.2086613]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Coastal Trail Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/tony-knowles-coastal-trail'>Tony Knowles Coastal Trail</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.8975039, 61.2205406]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Earthquake Park</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/tony-knowles-coastal-trail'>Tony Knowles Coastal Trail</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.977575, 61.1962577]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Point Woronzof</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/tony-knowles-coastal-trail'>Tony Knowles Coastal Trail</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-150.020746, 61.2020435]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Kincaid Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/tony-knowles-coastal-trail'>Tony Knowles Coastal Trail</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-150.0556243, 61.1534379]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Arctic Valley Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/mt-gordon-lyons'>Mt. Gordon Lyons</a></li><li><a href='./hikes/rendezvous-peak'>Rendezvous Peak</a></li><li><a href='./hikes/ship-creek-trail'>Ship Creek Trail</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.53491, 61.2467223]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Ptarmigan Valley Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/ptarmigan-valley-trail'>Ptarmigan Valley Trail</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.470132, 61.3902249]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Peter's Creek Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/bear-mountain'>Bear Mountain</a></li><li><a href='./hikes/mt-eklutna'>Mt. Eklutna</a></li><li><a href='./hikes/peters-creek-trail'>Peter's Creek Trail</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.4125785, 61.3973067]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Thunderbird Falls</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/thunderbird-falls'>Thunderbird Falls</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.3703505, 61.4491375]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Eklutna Lake Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/bold-peak-valley'>Bold Peak Valley</a></li><li><a href='./hikes/east-fork-trail'>East Fork Trail</a></li><li><a href='./hikes/eklutna-lake'>Eklutna Lake</a></li><li><a href='./hikes/pepper-peak'>Pepper Peak</a></li><li><a href='./hikes/twin-peaks'>Twin Peaks</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.1355825, 61.4093816]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>South Fork Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/eagle-peak'>Eagle Peak</a></li><li><a href='./hikes/eagle-and-symphony-lakes'>Eagle and Symphony Lakes</a></li><li><a href='./hikes/flute-glacier'>Flute Glacier</a></li><li><a href='./hikes/hanging-valley'>Hanging Valley</a></li><li><a href='./hikes/rendezvous-peak'>Rendezvous Peak</a></li><li><a href='./hikes/triangle-peak'>Triangle Peak</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.4561918, 61.2327938]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Harp Mountain Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/harp-mountain'>Harp Mountain</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.4317392, 61.2234848]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Butte Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/bodenburg-butte-trail'>Bodenburg Butte Trail</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.0540993, 61.5416977]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Lazy Mountain Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/lazy-mountain'>Lazy Mountain</a></li><li><a href='./hikes/matanuska-peak'>Matanuska Peak</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.0160302, 61.611346]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Gold Mint Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/gold-mint-trail'>Gold Mint Trail</a></li><li><a href='./hikes/mint-valley-to-reed-lake'>Mint Valley to Reed Lake</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.1963238, 61.7787349]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Reed Lakes Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/archangel-valley'>Archangel Valley</a></li><li><a href='./hikes/mint-bomber-traverse'>Mint Bomber Traverse</a></li><li><a href='./hikes/reed-lakes'>Reed Lakes</a></li><li><a href='./hikes/snowbird-mine-glacier'>Snowbird Mine & Glacier</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.2027134, 61.8041865]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Fishhook Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/marmot-mountain'>Marmot Mountain</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.2654427, 61.7669796]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>April Bowl</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/april-bowl-hatch-peak'>April Bowl / Hatch Peak</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.315011, 61.7681064]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Johnson Pass Trailhead (North)</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/johnson-pass'>Johnson Pass</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.2777607, 60.7242292]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Lost Lake Trailhead (Primrose)</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/lost-lake'>Lost Lake</a></li><li><a href='./hikes/lost-lake-backcountry'>Lost Lake Backcountry</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.3696385, 60.3407152]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Lost Lake Trailhead (Bear Creek)</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/lost-lake'>Lost Lake</a></li><li><a href='./hikes/lost-lake-backcountry'>Lost Lake Backcountry</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.4111181, 60.1724475]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Mount Marathon</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/mt-marathon'>Mt. Marathon</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.4510515, 60.1040114]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Caines Head Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/caines-head-alpine-trail'>Caines Head Alpine Trail</a></li><li><a href='./hikes/caines-head-trail'>Caines Head Trail</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.4426372, 60.0682518]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Johnson Pass Trailhead (South)</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/johnson-pass'>Johnson Pass</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.438165, 60.5039132]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Resurrection Pass Trailhead (South)</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/resurrection-pass'>Resurrection Pass</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.9536442, 60.4844122]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Devils Pass Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/devils-pass'>Devil's Pass</a></li><li><a href='./hikes/resurrection-pass'>Resurrection Pass</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.581797, 60.5600339]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Resurrection Pass Trailhead (North)</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/resurrection-pass'>Resurrection Pass</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.6300699, 60.8698073]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Byers Lake Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/kesugi-ridge'>Kesugi Ridge</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-150.1269574, 62.7430437]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Ermine Hill Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/ermine-hill-trail'>Ermine Hill Trail</a></li><li><a href='./hikes/kesugi-ridge'>Kesugi Ridge</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.9035288, 62.8274689]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Little Coal Creek Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/kesugi-ridge'>Kesugi Ridge</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.7465986, 62.8921755]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Upper Troublesome Creek Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/kesugi-ridge'>Kesugi Ridge</a></li><li><a href='./hikes/upper-troublesome-creek-trail'>Upper Troublesome Creek Trail</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-150.2281732, 62.630615]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Crescent Creek Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/crescent-lake'>Crescent Lake</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.6753052, 60.4986969]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Carter Lake Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/crescent-lake'>Crescent Lake</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.4448204, 60.5075241]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Independence Mine Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/gold-cord-lake-trail'>Gold Cord Lake Trail</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.2789063, 61.7770085]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Exit Glacier Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/exit-glacier-and-harding-icefield'>Exit Glacier & Harding Icefield</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.65303, 60.1844102]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Lower Eagle River Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/lower-eagle-river-trail'>Lower Eagle River Trail</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.5339347, 61.2969205]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Eklutna Road Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/mt-powmia'>Mt. POW/MIA</a></li><li><a href='./hikes/gold-star-peak'>Gold Star Peak</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.2518729, 61.4478723]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Byron Glacier Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/byron-glacier'>Byron Glacier</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-148.8460476, 60.7736707]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Portage Pass Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/portage-pass'>Portage Pass</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-148.7342028, 60.7746023]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>West Mendenhall Glacier Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/west-mendenhall-glacier-trail'>West Mendenhall Glacier Trail</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-134.5839964, 58.4256107]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Chilkoot Trail Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/chilkoot-trail'>Chilkoot Trail</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-135.3466516, 59.511806]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Matanuska Glacier Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/matanuska-glacier'>Matanuska Glacier</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-147.7658421, 61.7779049]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Red Shirt Lake Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/red-shirt-lake'>Red Shirt Lake</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-150.1413254, 61.6670768]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Smokejumper Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/campbell-creek-tract-bicentennial-park'>Campbell Creek Tract - Bicentennial Park</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.8019342, 61.1587106]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Abbott Community Park Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/campbell-creek-tract-bicentennial-park'>Campbell Creek Tract - Bicentennial Park</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.8021602, 61.1478876]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Snow Hawk Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/temptation-peak'>Temptation Peak</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.6512922, 61.2253661]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Skookum Volcano Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/skookum-volcano'>Skookum Volcano</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-143.0911542, 62.4511309]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Rambler Mine Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/rambler-mine'>Rambler Mine</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-143.0065322, 62.3871207]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description': "<strong>Indianhouse Mountain Trailhead</strong><p>Hikes available from this trailhead:</p><ul><li><a href='./hikes/indianhouse-mountain'>Indianhouse Mountain</a></li></ul>"
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-149.5422241, 60.9836178]
                            }
                        },
                                             ]
                                    }
                                },
                                'layout': {
                                    'icon-image': 'pin',
                                    'icon-allow-overlap': true,
                                    'icon-offset': [0, -11]
                                }
                            });
                        });

                        setup_map_events(map);
                    });
                }
function map_alyeskanorthface() {
                            var map = map_init(-149.0952829, 60.9697352, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Alyeska Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=60.9697352,-149.0952829&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.0952829, 60.9697352]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_alyeskaroundhouse() {
                            var map = map_init(-149.0952829, 60.9697352, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Alyeska Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=60.9697352,-149.0952829&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.0952829, 60.9697352]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_anchoragegreenbelttrails() {
                            var map = map_init(-149.7961653, 61.1776439, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Campbell Creek Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.1776439,-149.7961653&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.7961653, 61.1776439]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Goose Lake Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.1970637,-149.8214782&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.8214782, 61.1970637]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Russian Jack Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.2066386,-149.7795995&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.7795995, 61.2066386]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Westchester Lagoon Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.2086613,-149.9228354&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.9228354, 61.2086613]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                           map.fitBounds([[-149.9228354, 61.1776439], [-149.7795995, 61.2086613]], { padding: 30 });         setup_map_events(map);
                            });
                    }
function map_aprilbowlhatchpeak() {
                            var map = map_init(-149.315011, 61.7681064, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>April Bowl</strong><p><a href='https://maps.google.com/maps?daddr=61.7681064,-149.315011&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.315011, 61.7681064]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_archangelvalley() {
                            var map = map_init(-149.2027134, 61.8041865, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Reed Lakes Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.8041865,-149.2027134&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.2027134, 61.8041865]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_bashertrail() {
                            var map = map_init(-149.7143492, 61.1515809, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Basher Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.1515809,-149.7143492&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.7143492, 61.1515809]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_bearmountain() {
                            var map = map_init(-149.4125785, 61.3973067, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Peter's Creek Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.3973067,-149.4125785&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.4125785, 61.3973067]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_birdcreektrail() {
                            var map = map_init(-149.4799335, 60.978935, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Bird Ridge Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=60.978935,-149.4799335&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.4799335, 60.978935]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_birdridgetarns() {
                            var map = map_init(-149.4799335, 60.978935, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Bird Ridge Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=60.978935,-149.4799335&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.4799335, 60.978935]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_birdridge() {
                            var map = map_init(-149.4799335, 60.978935, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Bird Ridge Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=60.978935,-149.4799335&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.4799335, 60.978935]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_blacktailrocks() {
                            var map = map_init(-149.5116133, 61.3380357, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Mt. Baldy Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.3380357,-149.5116133&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.5116133, 61.3380357]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_bodenburgbuttetrail() {
                            var map = map_init(-149.0540993, 61.5416977, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Butte Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.5416977,-149.0540993&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.0540993, 61.5416977]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_boldpeakvalley() {
                            var map = map_init(-149.1355825, 61.4093816, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Eklutna Lake Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.4093816,-149.1355825&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.1355825, 61.4093816]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_byronglacier() {
                            var map = map_init(-148.8460476, 60.7736707, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Byron Glacier Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=60.7736707,-148.8460476&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-148.8460476, 60.7736707]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_cainesheadalpinetrail() {
                            var map = map_init(-149.4426372, 60.0682518, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Caines Head Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=60.0682518,-149.4426372&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.4426372, 60.0682518]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_cainesheadtrail() {
                            var map = map_init(-149.4426372, 60.0682518, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Caines Head Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=60.0682518,-149.4426372&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.4426372, 60.0682518]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_campbellcreekcanyontrail() {
                            var map = map_init(-149.7108881, 61.1389031, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Prospect Heights Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.1389031,-149.7108881&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.7108881, 61.1389031]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Basher Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.1515809,-149.7143492&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.7143492, 61.1515809]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                           map.fitBounds([[-149.7143492, 61.1389031], [-149.7108881, 61.1515809]], { padding: 30 });         setup_map_events(map);
                            });
                    }
function map_campbellcreektractbicentennialpark() {
                            var map = map_init(-149.7657098, 61.165846, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Campbell Airstrip Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.165846,-149.7657098&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.7657098, 61.165846]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Campbell Creek Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.1776439,-149.7961653&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.7961653, 61.1776439]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Hilltop Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.1379331,-149.7531918&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.7531918, 61.1379331]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>North Bivouac Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.1543049,-149.7375792&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.7375792, 61.1543049]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>South Bivouac Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.153196,-149.7378048&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.7378048, 61.153196]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Basher Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.1515809,-149.7143492&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.7143492, 61.1515809]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Smokejumper Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.1587106,-149.8019342&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.8019342, 61.1587106]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Abbott Community Park Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.1478876,-149.8021602&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.8021602, 61.1478876]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                           map.fitBounds([[-149.8021602, 61.1379331], [-149.7143492, 61.1776439]], { padding: 30 });         setup_map_events(map);
                            });
                    }
function map_chilkoottrail() {
                            var map = map_init(-135.3466516, 59.511806, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Chilkoot Trail Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=59.511806,-135.3466516&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-135.3466516, 59.511806]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_crescentlake() {
                            var map = map_init(-149.6753052, 60.4986969, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Crescent Creek Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=60.4986969,-149.6753052&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.6753052, 60.4986969]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Carter Lake Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=60.5075241,-149.4448204&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.4448204, 60.5075241]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                           map.fitBounds([[-149.6753052, 60.4986969], [-149.4448204, 60.5075241]], { padding: 30 });         setup_map_events(map);
                            });
                    }
function map_crowpass() {
                            var map = map_init(-149.2711197, 61.2342489, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Eagle River Nature Center</strong><p><a href='https://maps.google.com/maps?daddr=61.2342489,-149.2711197&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.2711197, 61.2342489]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Crow Pass Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.0281201,-149.1161674&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.1161674, 61.0281201]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                           map.fitBounds([[-149.2711197, 61.0281201], [-149.1161674, 61.2342489]], { padding: 30 });         setup_map_events(map);
                            });
                    }
function map_devilspass() {
                            var map = map_init(-149.581797, 60.5600339, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Devils Pass Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=60.5600339,-149.581797&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.581797, 60.5600339]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_dewmoundtrail() {
                            var map = map_init(-149.2711197, 61.2342489, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Eagle River Nature Center</strong><p><a href='https://maps.google.com/maps?daddr=61.2342489,-149.2711197&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.2711197, 61.2342489]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_eagleandsymphonylakes() {
                            var map = map_init(-149.4561918, 61.2327938, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>South Fork Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.2327938,-149.4561918&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.4561918, 61.2327938]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_eaglepeak() {
                            var map = map_init(-149.4561918, 61.2327938, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>South Fork Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.2327938,-149.4561918&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.4561918, 61.2327938]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_eagleriver() {
                            var map = map_init(-149.2711197, 61.2342489, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Eagle River Nature Center</strong><p><a href='https://maps.google.com/maps?daddr=61.2342489,-149.2711197&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.2711197, 61.2342489]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_eastforktrail() {
                            var map = map_init(-149.1355825, 61.4093816, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Eklutna Lake Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.4093816,-149.1355825&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.1355825, 61.4093816]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_eklutnalake() {
                            var map = map_init(-149.1355825, 61.4093816, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Eklutna Lake Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.4093816,-149.1355825&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.1355825, 61.4093816]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_erminehilltrail() {
                            var map = map_init(-149.9035288, 62.8274689, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Ermine Hill Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=62.8274689,-149.9035288&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.9035288, 62.8274689]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_exitglacierandhardingicefield() {
                            var map = map_init(-149.65303, 60.1844102, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Exit Glacier Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=60.1844102,-149.65303&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.65303, 60.1844102]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_fallscreektrail() {
                            var map = map_init(-149.5762637, 60.9840998, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Falls Creek Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=60.9840998,-149.5762637&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.5762637, 60.9840998]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_flattop() {
                            var map = map_init(-149.6831682, 61.1030702, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Glen Alps Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.1030702,-149.6831682&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.6831682, 61.1030702]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_fluteglacier() {
                            var map = map_init(-149.4561918, 61.2327938, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>South Fork Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.2327938,-149.4561918&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.4561918, 61.2327938]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_footballfieldomalleypeak() {
                            var map = map_init(-149.6831682, 61.1030702, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Glen Alps Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.1030702,-149.6831682&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.6831682, 61.1030702]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_goldcordlaketrail() {
                            var map = map_init(-149.2789063, 61.7770085, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Independence Mine Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.7770085,-149.2789063&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.2789063, 61.7770085]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_goldminttrail() {
                            var map = map_init(-149.1963238, 61.7787349, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Gold Mint Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.7787349,-149.1963238&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.1963238, 61.7787349]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_goldstarpeak() {
                            var map = map_init(-149.2518729, 61.4478723, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Eklutna Road Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.4478723,-149.2518729&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.2518729, 61.4478723]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_grizzlybearlake() {
                            var map = map_init(-149.1161674, 61.0281201, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Crow Pass Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.0281201,-149.1161674&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.1161674, 61.0281201]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_gullrocktrail() {
                            var map = map_init(-149.6645777, 60.9257762, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Gull Rock Trail</strong><p><a href='https://maps.google.com/maps?daddr=60.9257762,-149.6645777&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.6645777, 60.9257762]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_hangingvalley() {
                            var map = map_init(-149.4561918, 61.2327938, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>South Fork Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.2327938,-149.4561918&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.4561918, 61.2327938]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_harpmountain() {
                            var map = map_init(-149.4317392, 61.2234848, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Harp Mountain Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.2234848,-149.4317392&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.4317392, 61.2234848]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_hiddenvalley() {
                            var map = map_init(-149.6831682, 61.1030702, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Glen Alps Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.1030702,-149.6831682&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.6831682, 61.1030702]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_hopepoint() {
                            var map = map_init(-149.6645777, 60.9257762, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Gull Rock Trail</strong><p><a href='https://maps.google.com/maps?daddr=60.9257762,-149.6645777&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.6645777, 60.9257762]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_indianhousemountain() {
                            var map = map_init(-149.5762637, 60.9840998, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Falls Creek Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=60.9840998,-149.5762637&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.5762637, 60.9840998]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Indianhouse Mountain Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=60.9836178,-149.5422241&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.5422241, 60.9836178]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                           map.fitBounds([[-149.5762637, 60.9836178], [-149.5422241, 60.9840998]], { padding: 30 });         setup_map_events(map);
                            });
                    }
function map_jewellglacier() {
                            var map = map_init(-149.1161674, 61.0281201, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Crow Pass Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.0281201,-149.1161674&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.1161674, 61.0281201]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_johnsonpass() {
                            var map = map_init(-149.2777607, 60.7242292, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Johnson Pass Trailhead (North)</strong><p><a href='https://maps.google.com/maps?daddr=60.7242292,-149.2777607&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.2777607, 60.7242292]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Johnson Pass Trailhead (South)</strong><p><a href='https://maps.google.com/maps?daddr=60.5039132,-149.438165&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.438165, 60.5039132]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                           map.fitBounds([[-149.438165, 60.5039132], [-149.2777607, 60.7242292]], { padding: 30 });         setup_map_events(map);
                            });
                    }
function map_kesugiridge() {
                            var map = map_init(-150.1269574, 62.7430437, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Byers Lake Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=62.7430437,-150.1269574&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-150.1269574, 62.7430437]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Ermine Hill Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=62.8274689,-149.9035288&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.9035288, 62.8274689]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Little Coal Creek Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=62.8921755,-149.7465986&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.7465986, 62.8921755]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Upper Troublesome Creek Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=62.630615,-150.2281732&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-150.2281732, 62.630615]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                           map.fitBounds([[-150.2281732, 62.630615], [-149.7465986, 62.8921755]], { padding: 30 });         setup_map_events(map);
                            });
                    }
function map_knoyapeak() {
                            var map = map_init(-149.7212225, 61.1809226, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Klutina Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.1809226,-149.7212225&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.7212225, 61.1809226]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_lazymountain() {
                            var map = map_init(-149.0160302, 61.611346, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Lazy Mountain Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.611346,-149.0160302&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.0160302, 61.611346]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_lostlakebackcountry() {
                            var map = map_init(-149.3696385, 60.3407152, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Lost Lake Trailhead (Primrose)</strong><p><a href='https://maps.google.com/maps?daddr=60.3407152,-149.3696385&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.3696385, 60.3407152]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Lost Lake Trailhead (Bear Creek)</strong><p><a href='https://maps.google.com/maps?daddr=60.1724475,-149.4111181&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.4111181, 60.1724475]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                           map.fitBounds([[-149.4111181, 60.1724475], [-149.3696385, 60.3407152]], { padding: 30 });         setup_map_events(map);
                            });
                    }
function map_lostlake() {
                            var map = map_init(-149.3696385, 60.3407152, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Lost Lake Trailhead (Primrose)</strong><p><a href='https://maps.google.com/maps?daddr=60.3407152,-149.3696385&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.3696385, 60.3407152]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Lost Lake Trailhead (Bear Creek)</strong><p><a href='https://maps.google.com/maps?daddr=60.1724475,-149.4111181&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.4111181, 60.1724475]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                           map.fitBounds([[-149.4111181, 60.1724475], [-149.3696385, 60.3407152]], { padding: 30 });         setup_map_events(map);
                            });
                    }
function map_lowereaglerivertrail() {
                            var map = map_init(-149.5339347, 61.2969205, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Lower Eagle River Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.2969205,-149.5339347&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.5339347, 61.2969205]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_marmotmountain() {
                            var map = map_init(-149.2654427, 61.7669796, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Fishhook Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.7669796,-149.2654427&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.2654427, 61.7669796]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_matanuskaglacier() {
                            var map = map_init(-147.7658421, 61.7779049, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Matanuska Glacier Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.7779049,-147.7658421&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-147.7658421, 61.7779049]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_matanuskapeak() {
                            var map = map_init(-149.0160302, 61.611346, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Lazy Mountain Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.611346,-149.0160302&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.0160302, 61.611346]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_mchughpeak() {
                            var map = map_init(-149.7315773, 61.0179272, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>McHugh Creek Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.0179272,-149.7315773&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.7315773, 61.0179272]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_mchughtrailrabbitlake() {
                            var map = map_init(-149.7315773, 61.0179272, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>McHugh Creek Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.0179272,-149.7315773&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.7315773, 61.0179272]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Rabbit Lake Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.0795745,-149.6780712&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.6780712, 61.0795745]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                           map.fitBounds([[-149.7315773, 61.0179272], [-149.6780712, 61.0795745]], { padding: 30 });         setup_map_events(map);
                            });
                    }
function map_mintbombertraverse() {
                            var map = map_init(-149.2027134, 61.8041865, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Reed Lakes Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.8041865,-149.2027134&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.2027134, 61.8041865]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_mintvalleytoreedlake() {
                            var map = map_init(-149.1963238, 61.7787349, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Gold Mint Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.7787349,-149.1963238&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.1963238, 61.7787349]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_mtbaldy() {
                            var map = map_init(-149.5116133, 61.3380357, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Mt. Baldy Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.3380357,-149.5116133&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.5116133, 61.3380357]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_mteklutna() {
                            var map = map_init(-149.4125785, 61.3973067, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Peter's Creek Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.3973067,-149.4125785&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.4125785, 61.3973067]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_mtgordonlyons() {
                            var map = map_init(-149.53491, 61.2467223, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Arctic Valley Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.2467223,-149.53491&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.53491, 61.2467223]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_mtmagnificent() {
                            var map = map_init(-149.4651135, 61.3135182, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Mile Hi Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.3135182,-149.4651135&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.4651135, 61.3135182]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_mtmarathon() {
                            var map = map_init(-149.4510515, 60.1040114, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Mount Marathon</strong><p><a href='https://maps.google.com/maps?daddr=60.1040114,-149.4510515&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.4510515, 60.1040114]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_mtpowmia() {
                            var map = map_init(-149.2518729, 61.4478723, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Eklutna Road Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.4478723,-149.2518729&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.2518729, 61.4478723]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_nearpoint() {
                            var map = map_init(-149.7108881, 61.1389031, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Prospect Heights Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.1389031,-149.7108881&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.7108881, 61.1389031]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Basher Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.1515809,-149.7143492&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.7143492, 61.1515809]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                           map.fitBounds([[-149.7143492, 61.1389031], [-149.7108881, 61.1515809]], { padding: 30 });         setup_map_events(map);
                            });
                    }
function map_pepperpeak() {
                            var map = map_init(-149.1355825, 61.4093816, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Eklutna Lake Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.4093816,-149.1355825&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.1355825, 61.4093816]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_peterscreektrail() {
                            var map = map_init(-149.4125785, 61.3973067, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Peter's Creek Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.3973067,-149.4125785&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.4125785, 61.3973067]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_portagepass() {
                            var map = map_init(-148.7342028, 60.7746023, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Portage Pass Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=60.7746023,-148.7342028&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-148.7342028, 60.7746023]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_powerlinepass() {
                            var map = map_init(-149.6831682, 61.1030702, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Glen Alps Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.1030702,-149.6831682&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.6831682, 61.1030702]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Prospect Heights Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.1389031,-149.7108881&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.7108881, 61.1389031]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                           map.fitBounds([[-149.7108881, 61.1030702], [-149.6831682, 61.1389031]], { padding: 30 });         setup_map_events(map);
                            });
                    }
function map_ptarmiganpeak() {
                            var map = map_init(-149.6831682, 61.1030702, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Glen Alps Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.1030702,-149.6831682&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.6831682, 61.1030702]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Prospect Heights Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.1389031,-149.7108881&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.7108881, 61.1389031]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                           map.fitBounds([[-149.7108881, 61.1030702], [-149.6831682, 61.1389031]], { padding: 30 });         setup_map_events(map);
                            });
                    }
function map_ptarmiganvalleytrail() {
                            var map = map_init(-149.470132, 61.3902249, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Ptarmigan Valley Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.3902249,-149.470132&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.470132, 61.3902249]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_rainbowpeak() {
                            var map = map_init(-149.640578, 60.9999982, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Rainbow Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=60.9999982,-149.640578&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.640578, 60.9999982]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_ramblermine() {
                            var map = map_init(-143.0065322, 62.3871207, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Rambler Mine Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=62.3871207,-143.0065322&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-143.0065322, 62.3871207]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_redshirtlake() {
                            var map = map_init(-150.1413254, 61.6670768, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Red Shirt Lake Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.6670768,-150.1413254&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-150.1413254, 61.6670768]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_reedlakes() {
                            var map = map_init(-149.2027134, 61.8041865, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Reed Lakes Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.8041865,-149.2027134&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.2027134, 61.8041865]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_rendezvouspeak() {
                            var map = map_init(-149.53491, 61.2467223, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Arctic Valley Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.2467223,-149.53491&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.53491, 61.2467223]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>South Fork Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.2327938,-149.4561918&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.4561918, 61.2327938]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                           map.fitBounds([[-149.53491, 61.2327938], [-149.4561918, 61.2467223]], { padding: 30 });         setup_map_events(map);
                            });
                    }
function map_resurrectionpass() {
                            var map = map_init(-149.9536442, 60.4844122, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Resurrection Pass Trailhead (South)</strong><p><a href='https://maps.google.com/maps?daddr=60.4844122,-149.9536442&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.9536442, 60.4844122]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Devils Pass Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=60.5600339,-149.581797&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.581797, 60.5600339]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Resurrection Pass Trailhead (North)</strong><p><a href='https://maps.google.com/maps?daddr=60.8698073,-149.6300699&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.6300699, 60.8698073]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                           map.fitBounds([[-149.9536442, 60.4844122], [-149.581797, 60.8698073]], { padding: 30 });         setup_map_events(map);
                            });
                    }
function map_roundtop() {
                            var map = map_init(-149.5116133, 61.3380357, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Mt. Baldy Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.3380357,-149.5116133&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.5116133, 61.3380357]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_sewardhighwayturnagainarm() {
                            var map = map_init(-149.1771283, 60.9452122, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Bird to Gird Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=60.9452122,-149.1771283&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.1771283, 60.9452122]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_shipcreektrail() {
                            var map = map_init(-149.53491, 61.2467223, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Arctic Valley Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.2467223,-149.53491&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.53491, 61.2467223]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_shiplakevalley() {
                            var map = map_init(-149.6831682, 61.1030702, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Glen Alps Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.1030702,-149.6831682&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.6831682, 61.1030702]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_skookumvolcano() {
                            var map = map_init(-143.0911542, 62.4511309, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Skookum Volcano Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=62.4511309,-143.0911542&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-143.0911542, 62.4511309]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_snowbirdmineglacier() {
                            var map = map_init(-149.2027134, 61.8041865, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Reed Lakes Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.8041865,-149.2027134&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.2027134, 61.8041865]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_southforkrimtrail() {
                            var map = map_init(-149.7108881, 61.1389031, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Prospect Heights Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.1389031,-149.7108881&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.7108881, 61.1389031]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_suicidepeaks() {
                            var map = map_init(-149.5762637, 60.9840998, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Falls Creek Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=60.9840998,-149.5762637&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.5762637, 60.9840998]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_tanainalake() {
                            var map = map_init(-149.7108881, 61.1389031, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Prospect Heights Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.1389031,-149.7108881&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.7108881, 61.1389031]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Basher Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.1515809,-149.7143492&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.7143492, 61.1515809]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                           map.fitBounds([[-149.7143492, 61.1389031], [-149.7108881, 61.1515809]], { padding: 30 });         setup_map_events(map);
                            });
                    }
function map_temptationpeak() {
                            var map = map_init(-149.6512922, 61.2253661, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Snow Hawk Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.2253661,-149.6512922&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.6512922, 61.2253661]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_thunderbirdfalls() {
                            var map = map_init(-149.3703505, 61.4491375, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Thunderbird Falls</strong><p><a href='https://maps.google.com/maps?daddr=61.4491375,-149.3703505&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.3703505, 61.4491375]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_tkishlapeak() {
                            var map = map_init(-149.7108881, 61.1389031, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Prospect Heights Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.1389031,-149.7108881&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.7108881, 61.1389031]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Basher Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.1515809,-149.7143492&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.7143492, 61.1515809]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                           map.fitBounds([[-149.7143492, 61.1389031], [-149.7108881, 61.1515809]], { padding: 30 });         setup_map_events(map);
                            });
                    }
function map_tonyknowlescoastaltrail() {
                            var map = map_init(-149.9228354, 61.2086613, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Westchester Lagoon Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.2086613,-149.9228354&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.9228354, 61.2086613]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Coastal Trail Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.2205406,-149.8975039&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.8975039, 61.2205406]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Earthquake Park</strong><p><a href='https://maps.google.com/maps?daddr=61.1962577,-149.977575&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.977575, 61.1962577]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Point Woronzof</strong><p><a href='https://maps.google.com/maps?daddr=61.2020435,-150.020746&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-150.020746, 61.2020435]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Kincaid Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.1534379,-150.0556243&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-150.0556243, 61.1534379]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                           map.fitBounds([[-150.0556243, 61.1534379], [-149.8975039, 61.2205406]], { padding: 30 });         setup_map_events(map);
                            });
                    }
function map_trianglepeak() {
                            var map = map_init(-149.4561918, 61.2327938, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>South Fork Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.2327938,-149.4561918&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.4561918, 61.2327938]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_turnagainarmtrail() {
                            var map = map_init(-149.7315773, 61.0179272, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>McHugh Creek Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.0179272,-149.7315773&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.7315773, 61.0179272]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Rainbow Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=60.9999982,-149.640578&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.640578, 60.9999982]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Potter Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.0480013,-149.7922744&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.7922744, 61.0480013]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                           map.fitBounds([[-149.7922744, 60.9999982], [-149.640578, 61.0480013]], { padding: 30 });         setup_map_events(map);
                            });
                    }
function map_twinpeaks() {
                            var map = map_init(-149.1355825, 61.4093816, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Eklutna Lake Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.4093816,-149.1355825&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.1355825, 61.4093816]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_uppertroublesomecreektrail() {
                            var map = map_init(-150.2281732, 62.630615, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Upper Troublesome Creek Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=62.630615,-150.2281732&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-150.2281732, 62.630615]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_upperwinnercreektrail() {
                            var map = map_init(-149.0952829, 60.9697352, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Alyeska Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=60.9697352,-149.0952829&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.0952829, 60.9697352]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_westmendenhallglaciertrail() {
                            var map = map_init(-134.5839964, 58.4256107, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>West Mendenhall Glacier Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=58.4256107,-134.5839964&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-134.5839964, 58.4256107]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_williwawlakes() {
                            var map = map_init(-149.6831682, 61.1030702, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Glen Alps Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.1030702,-149.6831682&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.6831682, 61.1030702]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Prospect Heights Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.1389031,-149.7108881&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.7108881, 61.1389031]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                           map.fitBounds([[-149.7108881, 61.1030702], [-149.6831682, 61.1389031]], { padding: 30 });         setup_map_events(map);
                            });
                    }
function map_winnercreek() {
                            var map = map_init(-149.0952829, 60.9697352, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Alyeska Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=60.9697352,-149.0952829&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.0952829, 60.9697352]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                             setup_map_events(map);
                            });
                    }
function map_wolverinepeak() {
                            var map = map_init(-149.7108881, 61.1389031, 9);

                            map.on('load', function() {
                                map.loadImage('/img/map-pin.png', function(error, image) {
                                    if (error) throw error;
                                    map.addImage('pin', image);
                                    map.addLayer({
                                        'id': 'places',
                                        'type': 'symbol',
                                        'source': {
                                            'type': 'geojson',
                                            'data': {
                                                'type': 'FeatureCollection',
                                                'features': [
                                {
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Prospect Heights Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.1389031,-149.7108881&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.7108881, 61.1389031]
                                }
                            },{
                                'type': 'Feature',
                                'properties': {
                                    'description': "<strong>Basher Trailhead</strong><p><a href='https://maps.google.com/maps?daddr=61.1515809,-149.7143492&amp;ll=' target='_blank'>Get directions to this trailhead</a></p>"
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-149.7143492, 61.1515809]
                                }
                            },                         ]
                                            }
                                        },
                                        'layout': {
                                            'icon-image': 'pin',
                                            'icon-allow-overlap': true,
                                            'icon-offset': [0, -11]
                                        }
                                    });
                                });                                
                           map.fitBounds([[-149.7143492, 61.1389031], [-149.7108881, 61.1515809]], { padding: 30 });         setup_map_events(map);
                            });
                    }
