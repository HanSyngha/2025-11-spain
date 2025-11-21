import { getImagePath } from '../utils/image';

export const itinerary = [
    {
        day: "Day 1",
        date: "11월 27일 (목)",
        title: "출국 & 상하이 레이오버",
        location: "Shanghai, China",
        thumbnail: "/images/shanghai.png",
        coordinates: [31.2304, 121.4737],
        events: [
            {
                time: "08:55",
                title: "인천공항 출발 (MU5052)",
                description: "제1여객터미널, 중국동방항공",
                type: "flight",
                coordinates: [37.4602, 126.4407]
            },
            {
                time: "09:55",
                title: "상하이 푸동 공항 도착",
                description: "입국 수속 및 임시 비자 발급 (약 1.5시간 소요)",
                type: "flight",
                coordinates: [31.1443, 121.8083]
            },
            {
                time: "12:00",
                title: "상하이 시내 이동",
                description: "자기부상열차(Maglev) 및 지하철 2호선 이용 (약 45분)",
                type: "drive",
                coordinates: [31.2005, 121.5868]
            },
            {
                time: "13:00",
                title: "난징동로 보행가",
                description: "상하이 최대 번화가 산책 및 점심 식사 (샤오롱바오 추천)",
                type: "activity",
                coordinates: [31.2342, 121.4713]
            },
            {
                time: "15:00",
                title: "와이탄 (The Bund)",
                description: "황푸강변 산책, 동방명주 및 스카이라인 감상",
                type: "activity",
                coordinates: [31.2366, 121.4856]
            },
            {
                time: "21:00",
                title: "공항 복귀 및 체크인",
                description: "지하철 및 자기부상열차 이용하여 공항 복귀",
                type: "drive",
                coordinates: [31.1443, 121.8083]
            },
            {
                time: "00:05 (+1)",
                title: "바르셀로나행 출발 (MU701)",
                description: "약 14시간 비행",
                type: "flight",
                coordinates: [31.1443, 121.8083]
            }
        ]
    },
    {
        day: "Day 2",
        date: "11월 28일 (금)",
        title: "바르셀로나 도착 & 코르도바 이동",
        location: "Cordoba, Spain",
        thumbnail: "/images/cordoba.png",
        coordinates: [37.8882, -4.7794],
        events: [
            {
                time: "08:00",
                title: "바르셀로나 공항 도착",
                description: "입국 심사 및 짐 찾기",
                type: "flight",
                coordinates: [41.2974, 2.0833]
            },
            {
                time: "09:30",
                title: "렌터카 픽업 (Record Go)",
                description: "Toyota Yaris Hybrid 급, 풀커버 보험 확인",
                type: "car",
                image: "/reservations/rentcar-qr.jpg",
                coordinates: [41.2974, 2.0833]
            },
            {
                time: "10:30",
                title: "코르도바 이동",
                description: "약 8시간 30분 소요 (장거리 운전, 중간 휴게소 필수)",
                type: "drive",
                coordinates: [39.4699, -0.3763] // Waypoint
            },
            {
                time: "19:00",
                title: "코르도바 숙소 체크인",
                description: "구시가지 근처 주차장 확인 필요",
                type: "stay",
                coordinates: [37.8882, -4.7794]
            },
            {
                time: "20:30",
                title: "저녁 식사 및 야경 산책",
                description: "로마교(Puente Romano) 야경 감상 및 타파스 바 방문",
                type: "activity",
                coordinates: [37.8754, -4.7775]
            }
        ]
    },
    {
        day: "Day 3",
        date: "11월 29일 (토)",
        title: "코르도바 & 론다",
        location: "Ronda, Spain",
        thumbnail: "/images/ronda.png",
        coordinates: [36.7423, -5.1671],
        events: [
            {
                time: "09:00",
                title: "메스키타 (Mezquita) 관람",
                description: "이슬람과 가톨릭 양식이 혼재된 대성당 (입장료 약 €13)",
                type: "ticket",
                coordinates: [37.8742, -4.7745]
            },
            {
                time: "11:00",
                title: "유대인 지구 (Juderia) 산책",
                description: "꽃길(Calleja de las Flores)에서 사진 촬영",
                type: "activity",
                coordinates: [37.8796, -4.7797]
            },
            {
                time: "13:00",
                title: "론다로 이동",
                description: "약 2시간 소요, 안달루시아 평원 드라이브",
                type: "drive",
                coordinates: [37.1883, -4.6714]
            },
            {
                time: "15:30",
                title: "누에보 다리 (Puente Nuevo)",
                description: "엘 타호 협곡을 잇는 론다의 랜드마크, 뷰포인트 방문",
                type: "activity",
                coordinates: [36.7407, -5.1659]
            },
            {
                time: "17:00",
                title: "론다 투우장 & 구시가지",
                description: "스페인에서 가장 오래된 투우장 외관 관람 및 절벽 산책",
                type: "activity",
                coordinates: [36.7423, -5.1671]
            },
            {
                time: "19:00",
                title: "세비야로 이동",
                description: "약 1시간 45분 소요",
                type: "drive",
                coordinates: [37.0567, -5.3836]
            },
            {
                time: "21:00",
                title: "세비야 숙소 체크인",
                description: "세비야 대성당 근처 숙소",
                type: "stay",
                coordinates: [37.3891, -5.9845]
            }
        ]
    },
    {
        day: "Day 4",
        date: "11월 30일 (일)",
        title: "세비야 집중 탐구",
        location: "Sevilla, Spain",
        thumbnail: "/images/sevilla.png",
        coordinates: [37.3891, -5.9845],
        events: [
            {
                time: "10:30",
                title: "알카사르 (Real Alcázar) 입장",
                description: "2인 예약 완료 (왕좌의 게임 촬영지)",
                type: "ticket",
                image: "/reservations/alcazar-ticket-haram-hwang.jpg",
                subImages: ["/reservations/alcazar-ticket-syngha-han.jpg"],
                coordinates: [37.3831, -5.9902]
            },
            {
                time: "13:00",
                title: "세비야 대성당 & 히랄다 탑",
                description: "세계 3대 성당 중 하나, 콜럼버스의 묘",
                type: "activity",
                coordinates: [37.3858, -5.9931]
            },
            {
                time: "16:00",
                title: "스페인 광장 (Plaza de España)",
                description: "김태희 CF 촬영지, 타일 벤치 감상 및 보트 타기",
                type: "activity",
                coordinates: [37.3772, -5.9869]
            },
            {
                time: "18:00",
                title: "메트로폴 파라솔",
                description: "세계 최대 목조 건축물, 일몰 감상",
                type: "activity",
                coordinates: [37.3933, -5.9917]
            },
            {
                time: "20:00",
                title: "플라멩코 공연 관람",
                description: "트리아나 지구 또는 산타크루즈 지구의 타블라오",
                type: "activity",
                coordinates: [37.3842, -6.0031]
            }
        ]
    },
    {
        day: "Day 5",
        date: "12월 1일 (월)",
        title: "그라나다 이동 & 알바이신",
        location: "Granada, Spain",
        thumbnail: "/images/granada.png",
        coordinates: [37.1773, -3.5986],
        events: [
            {
                time: "10:00",
                title: "그라나다로 이동",
                description: "약 2시간 30분 소요",
                type: "drive",
                coordinates: [37.2567, -4.5632]
            },
            {
                time: "13:00",
                title: "점심 식사 & 휴식",
                description: "그라나다 시내 타파스 투어 (Bodegas Castañeda 추천)",
                type: "activity",
                coordinates: [37.1773, -3.5986]
            },
            {
                time: "16:00",
                title: "알바이신 지구 산책",
                description: "좁은 골목길과 하얀 집들이 어우러진 옛 아랍 지구",
                type: "activity",
                coordinates: [37.1810, -3.5927]
            },
            {
                time: "17:30",
                title: "니콜라스 전망대 (Mirador de San Nicolás)",
                description: "알함브라 궁전과 시에라 네바다 산맥의 일몰 감상",
                type: "activity",
                coordinates: [37.1810, -3.5927]
            },
            {
                time: "20:00",
                title: "저녁 식사",
                description: "모로코 스타일 찻집 또는 스페인 레스토랑",
                type: "activity",
                coordinates: [37.1765, -3.5950]
            }
        ]
    },
    {
        day: "Day 6",
        date: "12월 2일 (화)",
        title: "그라나다 숨은 명소 탐방",
        location: "Granada, Spain",
        thumbnail: "/images/granada.png",
        coordinates: [37.1773, -3.5986],
        events: [
            {
                time: "10:00",
                title: "그라나다 대성당 & 왕실 예배당",
                description: "이사벨 여왕과 페르난도 왕의 묘소",
                type: "activity",
                coordinates: [37.1765, -3.5990]
            },
            {
                time: "12:00",
                title: "알카이세리아 시장",
                description: "옛 비단 시장, 기념품 구경",
                type: "activity",
                coordinates: [37.1758, -3.5985]
            },
            {
                time: "14:00",
                title: "카르멘 데 로스 마르티레스",
                description: "알함브라 근처의 아름다운 정원과 공작새 (숨은 명소)",
                type: "activity",
                coordinates: [37.1735, -3.5865]
            },
            {
                time: "16:00",
                title: "사크로몬테 지구",
                description: "집시들의 동굴 주거지 탐방 및 박물관 관람",
                type: "activity",
                coordinates: [37.1825, -3.5880]
            },
            {
                time: "18:00",
                title: "레알레호 지구 (Realejo) 산책",
                description: "옛 유대인 지구, 그라피티 아트와 힙한 카페 탐방",
                type: "activity",
                coordinates: [37.1730, -3.5950]
            },
            {
                time: "20:00",
                title: "타파스 투어 (Calle Navas)",
                description: "현지인들이 즐겨 찾는 타파스 거리에서 저녁 식사",
                type: "activity",
                coordinates: [37.1745, -3.5980]
            }
        ]
    },
    {
        day: "Day 7",
        date: "12월 3일 (수)",
        title: "알함브라 & 발렌시아 이동",
        location: "Valencia, Spain",
        thumbnail: "/images/valencia.png",
        coordinates: [39.4699, -0.3763],
        events: [
            {
                time: "09:00",
                title: "알함브라 궁전 (Alhambra) 입장",
                description: "나스르 궁전(Nasrid Palaces) 2인 예약 완료",
                type: "ticket",
                image: "/reservations/alhambra-ticket-haram-hwang.jpg",
                subImages: ["/reservations/alhambra-ticket-syngha-han.jpg"],
                coordinates: [37.1760, -3.5881]
            },
            {
                time: "13:00",
                title: "발렌시아로 이동",
                description: "약 5시간 소요 (긴 이동)",
                type: "drive",
                coordinates: [38.3452, -0.4810]
            },
            {
                time: "18:30",
                title: "Rooms Ciencias 체크인",
                description: "Av. de l'Institut Obrer de València, 20 (14:00 이후 체크인)",
                type: "stay",
                coordinates: [39.4586, -0.3567]
            },
            {
                time: "20:00",
                title: "저녁 식사",
                description: "발렌시아 빠에야 맛집 방문",
                type: "activity",
                coordinates: [39.4699, -0.3763]
            }
        ]
    },
    {
        day: "Day 8",
        date: "12월 4일 (목)",
        title: "발렌시아 & 바르셀로나 이동",
        location: "Barcelona, Spain",
        thumbnail: "/images/barcelona.png",
        coordinates: [41.3851, 2.1734],
        events: [
            {
                time: "09:00",
                title: "조식 및 체크아웃",
                description: "호텔 조식 포함, 12:00 이전 체크아웃",
                type: "stay",
                coordinates: [39.4586, -0.3567]
            },
            {
                time: "09:30",
                title: "발렌시아 중앙 시장 (Mercado Central)",
                description: "유럽 최대 규모의 신선 식품 시장 구경",
                type: "activity",
                coordinates: [39.4736, -0.3790]
            },
            {
                time: "10:30",
                title: "라 론하 데 라 세다 (Silk Exchange)",
                description: "유네스코 세계문화유산, 고딕 양식의 걸작",
                type: "activity",
                coordinates: [39.4744, -0.3784]
            },
            {
                time: "11:30",
                title: "예술과 과학의 도시 (잠시 들르기)",
                description: "미래지향적 건축물 단지 산책 및 사진 촬영",
                type: "activity",
                coordinates: [39.4527, -0.3502]
            },
            {
                time: "12:30",
                title: "바르셀로나로 이동",
                description: "약 3시간 30분 소요",
                type: "drive",
                coordinates: [40.5682, 0.5645]
            },
            {
                time: "14:30",
                title: "페니스콜라 (Peñíscola) 경유",
                description: "바다 위의 성, 잠시 휴식 및 풍경 감상 (선택 사항)",
                type: "activity",
                coordinates: [40.3583, 0.4073]
            },
            {
                time: "17:00",
                title: "Hotel Ronda House 체크인",
                description: "Carrer de Sant Erasme, 19 (15:00 이후 체크인)",
                type: "stay",
                coordinates: [41.3795, 2.1651]
            },
            {
                time: "18:30",
                title: "고딕 지구 산책",
                description: "바르셀로나 대성당 및 좁은 골목길 탐방",
                type: "activity",
                coordinates: [41.3833, 2.1763]
            }
        ]
    },
    {
        day: "Day 9",
        date: "12월 5일 (금)",
        title: "귀국 (바르셀로나 -> 상하이)",
        location: "Barcelona Airport",
        thumbnail: "/images/barcelona.png",
        coordinates: [41.2974, 2.0833],
        events: [
            {
                time: "07:00",
                title: "공항 이동 및 렌터카 반납",
                description: "바르셀로나 공항(BCN) T1에서 반납",
                type: "car",
                coordinates: [41.2974, 2.0833]
            },
            {
                time: "10:20",
                title: "바르셀로나 출발 (MU250)",
                description: "T1 탑승 -> 상하이 푸동(PVG) T1 도착",
                type: "flight",
                coordinates: [41.2974, 2.0833]
            }
        ]
    },
    {
        day: "Day 10",
        date: "12월 6일 (토)",
        title: "인천 도착",
        location: "Incheon, Korea",
        thumbnail: "/images/shanghai.png",
        coordinates: [37.4602, 126.4407],
        events: [
            {
                time: "08:45",
                title: "상하이 출발 (MU5041)",
                description: "푸동(PVG) T1 탑승 -> 인천(ICN) 도착",
                type: "flight",
                coordinates: [31.1443, 121.8083]
            },
            {
                time: "11:40",
                title: "인천공항 도착",
                description: "여행 종료",
                type: "flight",
                coordinates: [37.4602, 126.4407]
            }
        ]
    }
];
