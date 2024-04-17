import news1 from "../../assets/news1.jpg"
import news2 from "../../assets/news2.jpg"
import news3 from "../../assets/news4.jpg"
import news4 from "../../assets/news3.jpg"
import news5 from "../../assets/news5.jpg"
import "./News.css"

const News = () => {
    return (
        <>
            <section id="new2_content">
                <div className="container">
                    <h2>Yangiliklar</h2>
                    <div className="news2_wrapper">
                        <div className="news2_card">
                            <img src={news1} className="slide_image" alt="Card image" />
                            <div className="mask"></div>
                            <div className="content">
                                <h4>Dunyoda 5.5G standartini qo‘llab-quvvatlaydigan birinchi smartfon paydo bo‘ldi</h4>
                                <p>
                                    2024 yil boshida Xitoyning China Mobile aloqa operatori 5G-Advanced (shuningdek 5.5G yoki 5GA nomi bilan ham tanilgan) yangi uyali aloqa standartini ishga tushirganini e’lon qildi. Ma’lum bo‘lishicha, bozorda yangi texnologiyani qo‘llab-quvvatlaydigan birinchi qurilma allaqachon mavjud.

                                    Xitoyning OPPO Find X7 smartfoni 5.5G standartini qo‘llab-quvvatlaydigan birinchi qurilma hisoblanadi. Bu haqda kompaniya vakili ma’lum qildi.
                                </p>
                            </div>
                        </div>
                        <div className="news2_card">
                            <img
                                src={news2}
                                className="slide_image"
                                alt="Card image"
                            />
                            <div className="mask"></div>
                            <div className="content">
                                <h4>
                                    NASA Oyda yagona vaqt standartini yaratadi
                                </h4>
                                <p>
                                    NASA kosmik aloqa va navigatsiya ma’muri Kevin Koggins so‘zlariga ko‘ra, Oy va boshqa samoviy jismlardagi turli tortishish kuchi va ehtimol boshqa omillar vaqtni Yerdagidan boshqacharoq tarzda xis qilinishiga olib keladi. Uning so‘zlariga ko‘ra, LTC Oy kosmik kemalari va sun’iy yo‘ldoshlari uchun vaqtni o‘lchash standartiga aylanadi, ularga o‘z vazifalarini bajarish uchun o‘ta aniqlik kerak.
                                </p>
                            </div>
                        </div>
                        <div className="news2_card">
                            <img
                                src={news3}
                                className="slide_image"
                                alt="Card image"
                            />
                            <div className="mask"></div>
                            <div className="content">
                                <h4>
                                    AQSh va Germaniyada «O‘zbekiston IT-kunlari» xalqaro tadbiri o‘tkaziladi
                                </h4>
                                <p>
                                    «Mamlakatimizda raqamlashtirish sohasidagi xizmatlar eksportini rivojlantirishga doir qo‘shimcha chora-tadbirlar to‘g‘risida»gi prezident qarori qabul qilindi.

                                    Qarorga ko‘ra, quyidagilar amalga oshiriladi:

                                    - Qoraqalpog‘iston Respublikasi va viloyatlarda IT-sanoatni rivojlantirish, aholini yuqori daromadli ish o‘rinlari va zamonaviy kasblar bilan ta’minlash, shuningdek, hududlarga IT-xizmatlar eksport qiluvchi korxonalarni keng jalb qilishga qaratilgan dastur (Zero Risk);

                                    - mahalliy bozor uchun IT-xizmatlar ko‘rsatish sohasida faoliyat yurituvchi korxonalarni xalqaro IT-bozorga olib chiqish, ularning eksport faoliyatini qo‘llab-quvvatlash bo‘yicha loyiha (Local to Global).
                                </p>
                            </div>
                        </div>
                        <div className="news2_card">
                            <img src={news4} className="slide_image" alt="Card image" />
                            <div className="mask"></div>
                            <div className="content">
                                <h4>
                                    Telegram biznes akkauntlarni ishga tushiradi
                                </h4>
                                <p>
                                    Telegram foydalanuvchilari biznes akkauntlarini yaratish imkoniyatiga ega bo‘ladi. Bu haqda messenjer asoschisi Pavel Durov xabar berdi.

                                    Biznes akkauntda joylashgan manzilni, ish jadvalini ko‘rsatish, avtomatlashtirilgan xabarlarni yuborish va javob shablonlarini yaratish mumkin bo‘ladi.

                                    Biznes profillarni Telegram Business bo‘limida bepul yaratish mumkin.
                                </p>
                            </div>
                        </div>
                        <div className="news2_card">
                            <img
                                src={news5}
                                className="slide_image"
                                alt="Card image"
                            />
                            <div className="mask"></div>
                            <div className="content">
                                <h4>
                                    Sun’iy intellektga ishonmaydiganlar – sun’iy intellekt qanday qilib odamlar mehrini qozonishi mumkin?
                                </h4>
                                <p>
                                    2024 yilda 28 ta davlatda 32 ming ishtirokchi o‘rtasida o‘tkazilgan so‘rovnomalarga ko‘ra, respondentlarning 38 foizi innovatsiyalarni qabul qiladi, 35 foizi esa rad etadi.
                                    Hozir sun’iy intellekt muhim burilish nuqtasida turibdi. Odamlarga innovatsiyalarni qabul qila olishlari uchun ko‘proq sabab topib berish lozim. Chunki sun’iy intellekt yillik global iqtisodiyotga 4,4 trillion dollargacha foyda olib kelishi mumkin.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default News;