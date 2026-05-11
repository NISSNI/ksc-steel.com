// ============================================
// KSC Website V2 — Multi-language Engine
// ============================================

const L = {
  nav: {
    home:      { zh:'首页',       en:'Home',       th:'หน้าแรก',        vi:'Trang chủ' },
    about:     { zh:'关于我们',   en:'About',      th:'เกี่ยวกับเรา',   vi:'Về chúng tôi' },
    products:  { zh:'产品中心',   en:'Products',   th:'ผลิตภัณฑ์',      vi:'Sản phẩm' },
    applications: { zh:'应用案例', en:'Applications', th:'กรณีใช้งาน', vi:'Ung dung' },
    processing: { zh:'加工能力', en:'Processing', th:'ความสามารถการแปรรูป', vi:'Gia cong' },
    quality: { zh:'质量交付', en:'Quality', th:'คุณภาพและส่งมอบ', vi:'Chat luong' },
    factory:   { zh:'生产基地',   en:'Factory',    th:'โรงงาน',        vi:'Nhà máy' },
    contact:   { zh:'联系我们',   en:'Contact',    th:'ติดต่อเรา',      vi:'Liên hệ' },
  },
  hero: {
    badge: { zh:'珠三角领先金属材料供应商', en:'Leading Metal Materials Supplier in PRD', th:'ผู้จัดหาวัสดุโลหะชั้นนำในเขตเจิ้งจู', vi:'Nha cung cap vat lieu kim loai hang dau vung Chinh Hai' },
    h1:    { zh:'高顺昌 — 金属材料专家', en:'KSC — Metal Materials Expert', th:'เคเอสซี — ผู้เชี่ยวชาญวัสดุโลหะ', vi:'KSC — Chuyen gia vat lieu kim loai' },
    p:     { zh:'专业销售特钢、矽钢片、铝材、不锈钢、铜材，提供分条/剪板/冷轧/退火等加工服务，深耕行业超过25年', en:'Specializing in Special Steel, Silicon Steel, Aluminum, Stainless Steel & Copper — with slitting, shearing, cold-rolling & annealing, 25+ years expertise', th:'เชี่ยวชาญเหล็กพิเศษ เหล็กซิลิคอน อะลูมิเนียม สแตนเลส และทองแดง พร้อมบริการตัด ม้วน และอบ มากกว่า 25 ปี', vi:'Chuyen ve Thep dac biet, Thep Silicon, Nhom, Thep khong gi & Dong — cat, uon, can lanh, u hon hon 25 nam' },
    btn1:  { zh:'查看产品', en:'View Products', th:'ดูผลิตภัณฑ์', vi:'Xem san pham' },
    btn2:  { zh:'联系我们', en:'Contact Us', th:'ติดต่อเรา', vi:'Lien he' },
  },
  sec: {
    about_h:  { zh:'关于我们', en:'About KSC', th:'เกี่ยวกับ KSC', vi:'Ve KSC' },
    about_p:  { zh:'高顺昌控股有限公司，25年深耕金属材料行业', en:'25+ years of expertise in metal materials & processing', th:'ความเชี่ยวชาญกว่า 25 ปีในวัสดุและการแปรรูปโลหะ', vi:'Hon 25 nam kinh nghiem trong vat lieu va gia cong kim loai' },
    mat_h:    { zh:'材料及应用', en:'Materials & Application', th:'วัสดุและการประยุกต์', vi:'Vat lieu va Ung dung' },
    mat_p:    { zh:'覆盖特钢、矽钢片、铝材、不锈钢、铜材全品类', en:'Full range of Special Steel, Silicon Steel, Aluminum, Stainless Steel & Copper', th:'วัสดุครบครัน ทั้งเหล็กพิเศษ เหล็กซิลิคอน อะลูมิเนียม สแตนเลส และทองแดง', vi:'Da dang day du: Thep dac biet, Thep Silicon, Nhom, Thep khong gi va Dong' },
    fac_h:    { zh:'五大生产基地', en:'Five Manufacturing Bases', th:'ห้าฐานการผลิต', vi:'Nam co so san xuat' },
    fac_p:    { zh:'覆盖中国、越南、泰国，加工产能领先', en:'Across China, Vietnam & Thailand — industry-leading capacity', th:'ครอบคลุมจีน เวียดนาม และไทย', vi:'Khap Trung Quoc, Viet Nam va Thai Lan' },
    cust_h:   { zh:'一流客户', en:'First-Rate Customers', th:'ลูกค้าระดับหัวแถว', vi:'Khach hang hang dau' },
    cust_p:   { zh:'我们为众多世界500强企业提供产品与服务', en:'Serving world-leading enterprises with premium materials', th:'ให้บริการวัสดุระดับพรีเมียมแก่องค์กรชั้นนำ', vi:'Phuc vu cac doanh nghiep hang dau the gioi' },
    proc_h:   { zh:'制程能力', en:'Process Capability', th:'ความสามารถในการผลิต', vi:'Nang luc san xuat' },
    proc_p:   { zh:'先进设备，精准加工，产能充足', en:'Advanced equipment, precision processing, ample capacity', th:'อุปกรณ์ทันสมัย การแปรรูปแม่นยำ', vi:'Thiet bi hien dai, gia cong chinh xac' },
    contact_h:{ zh:'联系我们', en:'Contact Us', th:'ติดต่อเรา', vi:'Lien he' },
    contact_p:{ zh:'期待与您携手合作', en:'We look forward to working with you', th:'เราหวังที่จะร่วมงานกับคุณ', vi:'Chung toi mong muon hop tac cung ban' },
  },
  about: {
    p1: { zh:'高顺昌控股有限公司（KSC）成立于2000年，总部位于香港，是一家专业从事特钢、矽钢片、铝材、不锈钢、铜材等金属材料贸易及加工服务的综合性企业。KSC在华南地区中高碳钢销量领先，深耕行业超过25年。', en:'Kao Shun Cheong Holdings Co., Ltd. (KSC) was established in 2000 with HQ in Hong Kong, specializing in the trade and processing of Special Steel, Silicon Steel, Aluminum, Stainless Steel, and Copper. KSC is the leading medium & high carbon steel supplier in South China, with 25+ years of expertise.', th:'KSC ก่อตั้งปี 2000 สำนักงานใหญ่ที่ฮ่องกง องค์กรที่ครอบคลุมการค้าและแปรรูปเหล็กพิเศษ เหล็กซิลิคอน อะลูมิเนียม สแตนเลส และทองแดง KSC เป็นผู้นำเหล็กคาร์บอนกลาง-สูงในจีนตอนใต้', vi:'KSC duoc thanh lap nam 2000, tru so tai Hong Kong, chuyen thuong mai va gia cong Thep dac biet, Thep Silicon, Nhom, Thep khong gi va Dong. KSC la nha cung cap thep carbon trung-cao hang dau mien Nam Trung Quoc.' },
  },
  products: {
    steel:  { zh:'特钢/精冲钢', en:'Special Steel / Fineblanking Steel', th:'เหล็กพิเศษ/เหล็กกลึง', vi:'Thep dac biet / Dam chinh xac' },
    alum:   { zh:'铝材', en:'Aluminum', th:'อะลูมิเนียม', vi:'Nhom' },
    ss:     { zh:'不锈钢', en:'Stainless Steel', th:'สแตนเลส', vi:'Thep khong gi' },
    sil:    { zh:'矽钢片', en:'Silicon Steel', th:'เหล็กซิลิคอน', vi:'Thep Silicon' },
    cop:    { zh:'铜材', en:'Copper', th:'ทองแดง', vi:'Dong' },
    hr:     { zh:'热轧/冷轧卷', en:'Hot-Rolled / Cold-Rolled Steel', th:'เหล็กม้วนร้อน/เย็น', vi:'Thep can nong/lanh' },
  },
  factory: {
    dg: { zh:'东莞工厂', en:'Dongguan Factory', th:'โรงงานตงกวาน', vi:'Nha may Dongguan' },
    sz: { zh:'苏州工厂', en:'Suzhou Factory', th:'โรงงานซูโจว', vi:'Nha may Suzhou' },
    xy: { zh:'新余工厂', en:'Xinyu Factory', th:'โรงงานซินยู', vi:'Nha may Xinyu' },
    vn: { zh:'越南海防工厂', en:'Haiphong Factory', th:'โรงงานไฮฟอง เวียดนาม', vi:'Nha may Hai Phong' },
    th: { zh:'泰国春武里工厂', en:'Chon Buri Factory', th:'โรงงานชลบุรี ไทย', vi:'Nha may Chon Buri' },
    sl: { zh:'分条', en:'Slitting', th:'ตัดยาว', vi:'Cat dai' },
    sh: { zh:'剪板', en:'Shearing', th:'ตัดแผ่น', vi:'Cat tam' },
    cr: { zh:'冷轧', en:'Cold Rolling', th:'ม้วนเย็น', vi:'Can lanh' },
    an: { zh:'退火', en:'Annealing', th:'อบ', vi:'Uu' },
  },
  footer: {
    brand: { zh:'高顺昌控股有限公司（KSC）专注金属材料行业超过25年，是中国、越南、泰国领先的金属材料供应商。', en:'KSC — 25+ years of expertise in metal materials, serving China, Vietnam & Thailand.', th:'KSC มีประสบการณ์กว่า 25 ปีในวัสดุโลหะ ส่งมอบให้จีน เวียดนาม และไทย', vi:'KSC hon 25 nam kinh nghiem vat lieu kim loai, phuc vu Trung Quoc, Viet Nam va Thai Lan.' },
    col1: { zh:'快速链接', en:'Quick Links', th:'ลิงก์ด่วน', vi:'Lien ket nhanh' },
    col2: { zh:'产品中心', en:'Products', th:'ผลิตภัณฑ์', vi:'San pham' },
    col3: { zh:'联系我们', en:'Contact', th:'ติดต่อ', vi:'Lien he' },
    copy: { zh:'© 2025 高顺昌控股有限公司 保留所有权利', en:'© 2025 Kao Shun Cheong Holdings Co., Ltd. All Rights Reserved', th:'© 2025 KSC สงวนลิขสิทธิ์', vi:'© 2025 KSC Bao luu moi quyen' },
  },
  stat: {
    years:    { zh:'年行业经验', en:'Years Experience', th:'ปีประสบการณ์', vi:'Nam kinh nghiem' },
    bases:     { zh:'个生产基地', en:'Manufacturing Bases', th:'ฐานการผลิต', vi:'Co so san xuat' },
    countries: { zh:'个国家和地区', en:'Countries & Regions', th:'ประเทศและภูมิภาค', vi:'Quoc gia va vung lanh tho' },
  },
  proc: {
    slitting_wide:   { zh:'宽幅分条机', en:'Slitting-Wide',    th:'เครื่องตัดยาวกว้าง',   vi:'May cat dai rong' },
    slitting_narrow: { zh:'窄幅分条机', en:'Slitting-Narrow',  th:'เครื่องตัดยาวแคบ',    vi:'May cat dai hep' },
    shearing_wide:   { zh:'大剪板机',   en:'Shearing-Wide',    th:'เครื่องตัดแผ่นใหญ่',   vi:'May cat tam lon' },
    shearing_narrow: { zh:'小飞剪机',   en:'Shearing-Narrow',  th:'เครื่องตัดแผ่นเล็ก',   vi:'May cat tam nho' },
    cr_thin:         { zh:'六辊轧机',   en:'Cold-Rolling-Thin',th:'เครื่องม้วนเย็นบาง',  vi:'May can lanh mong' },
    cr_thick:        { zh:'四辊轧机',   en:'Cold-Rolling-Thick',th:'เครื่องม้วนเย็นหนา',  vi:'May can lanh day' },
    annealing:        { zh:'退火炉',     en:'Annealing Furnace',th:'เตาอบ',               vi:'Lo u' },
  },
  home: {
    meta_materials: { zh:'特钢 / 矽钢片 / 铝材 / 不锈钢 / 铜材', en:'Special Steel / Silicon Steel / Aluminum / Stainless Steel / Copper', th:'เหล็กพิเศษ / เหล็กซิลิคอน / อะลูมิเนียม / สแตนเลส / ทองแดง', vi:'Thep dac biet / Thep silicon / Nhom / Thep khong gi / Dong' },
    meta_footprint: { zh:'中国 · 越南 · 泰国 五大生产基地', en:'China · Vietnam · Thailand · Five Manufacturing Bases', th:'จีน · เวียดนาม · ไทย · ฐานการผลิต 5 แห่ง', vi:'Trung Quoc · Viet Nam · Thai Lan · 5 co so san xuat' },
    panel_title: { zh:'从材料供应到加工交付，一站式协同', en:'From material supply to precision processing, all in one workflow', th:'ตั้งแต่วัสดุจนถึงการแปรรูป จบครบในระบบเดียว', vi:'Tu cung ung vat lieu den gia cong, dong bo trong mot quy trinh' },
    panel_clients: { zh:'合作客户', en:'Key Customers', th:'ลูกค้าร่วมงาน', vi:'Khach hang hop tac' },
    panel_note: { zh:'KSC 聚焦汽车、电子、精密五金与工业制造客户，提供稳定供货与灵活加工能力。', en:'KSC serves automotive, electronics, precision hardware and industrial manufacturing clients with stable supply and flexible processing.', th:'KSC ให้บริการลูกค้าอุตสาหกรรมยานยนต์ อิเล็กทรอนิกส์ ฮาร์ดแวร์ความแม่นยำ และการผลิต ด้วยการส่งมอบที่มั่นคงและการแปรรูปที่ยืดหยุ่น', vi:'KSC phuc vu khach hang oto, dien tu, kim khi chinh xac va san xuat cong nghiep bang nguon cung on dinh va gia cong linh hoat.' },
    why_title: { zh:'为什么选择 KSC', en:'Why Choose KSC', th:'ทำไมต้อง KSC', vi:'Vi sao chon KSC' },
    why_desc: { zh:'更成熟的供应体系、更稳定的加工交付、更国际化的制造布局。', en:'A stronger supply system, steadier processing delivery, and a more international manufacturing footprint.', th:'ระบบซัพพลายที่แข็งแรงกว่า การส่งมอบที่เสถียรกว่า และเครือข่ายการผลิตที่เป็นสากลมากกว่า', vi:'He thong cung ung truong thanh hon, giao hang on dinh hon va mang luoi san xuat quoc te hon.' },
    v1_title: { zh:'行业经验沉淀', en:'Deep Industry Experience', th:'ประสบการณ์ในอุตสาหกรรม', vi:'Kinh nghiem nganh sau' },
    v1_desc: { zh:'自 2000 年起专注金属材料贸易与加工，熟悉多行业对品质、交期与规格的要求。', en:'Focused on metal materials trading and processing since 2000, with a strong understanding of quality, lead time and specification needs across industries.', th:'มุ่งเน้นการค้าและแปรรูปวัสดุโลหะตั้งแต่ปี 2000 เข้าใจความต้องการด้านคุณภาพ ระยะเวลา และสเปกของหลายอุตสาหกรรม', vi:'Tap trung vao thuong mai va gia cong vat lieu kim loai tu nam 2000, hieu ro yeu cau ve chat luong, giao hang va quy cach cua nhieu nganh.' },
    v2_title: { zh:'跨区域生产网络', en:'Regional Manufacturing Network', th:'เครือข่ายการผลิตข้ามภูมิภาค', vi:'Mang luoi san xuat lien vung' },
    v2_desc: { zh:'东莞、苏州、新余、越南、泰国协同布局，兼顾灵活调度与国际交付效率。', en:'Dongguan, Suzhou, Xinyu, Vietnam and Thailand work together to balance flexible scheduling with international delivery efficiency.', th:'ตงก่วน ซูโจว ซินหยู เวียดนาม และไทย ทำงานประสานกันเพื่อให้ได้ทั้งความยืดหยุ่นและประสิทธิภาพการส่งมอบ', vi:'Dongguan, Suzhou, Xinyu, Viet Nam va Thai Lan phoi hop de can bang linh hoat dieu do va hieu qua giao hang quoc te.' },
    v3_title: { zh:'加工设备体系', en:'Processing Equipment System', th:'ระบบเครื่องจักรการแปรรูป', vi:'He thong thiet bi gia cong' },
    v3_desc: { zh:'覆盖分条、剪板、冷轧、退火等核心工艺，适配不同厚度、宽度与成品要求。', en:'Covering slitting, shearing, cold rolling and annealing to meet different thickness, width and finished-product requirements.', th:'ครอบคลุมการตัด ม้วนเย็น และอบ เพื่อตอบโจทย์ความหนา ความกว้าง และสินค้าสำเร็จรูปที่หลากหลาย', vi:'Bao gom cat, xe bang, can lanh va u de dap ung yeu cau ve do day, chieu rong va thanh pham.' },
    v4_title: { zh:'长期合作客户', en:'Long-Term Customer Partnerships', th:'ความร่วมมือระยะยาวกับลูกค้า', vi:'Quan he khach hang lau dai' },
    v4_desc: { zh:'持续服务多家头部制造企业，在稳定交付与材料一致性方面形成长期口碑。', en:'Trusted by leading manufacturers for consistent material quality and dependable long-term delivery.', th:'ได้รับความไว้วางใจจากผู้ผลิตชั้นนำในด้านคุณภาพวัสดุและการส่งมอบที่สม่ำเสมอ', vi:'Duoc cac nha san xuat hang dau tin tuong nho chat luong vat lieu dong nhat va giao hang dang tin cay.' },
    metric_years: { zh:'年行业经验', en:'Years Experience', th:'ปีประสบการณ์', vi:'Nam kinh nghiem' },
    metric_bases: { zh:'生产基地', en:'Manufacturing Bases', th:'ฐานการผลิต', vi:'Co so san xuat' },
    metric_regions: { zh:'国家和地区', en:'Countries & Regions', th:'ประเทศและภูมิภาค', vi:'Quoc gia va khu vuc' },
    stats_title: { zh:'稳定供货能力，来自制造端的长期投入', en:'Reliable supply capacity built on long-term manufacturing investment', th:'ศักยภาพการส่งมอบที่มั่นคง จากการลงทุนด้านการผลิตระยะยาว', vi:'Nang luc cung ung on dinh den tu dau tu san xuat dai han' },
    stats_desc: { zh:'从原材料整合到加工设备配置，KSC 以更完整的产能链路，为客户提供更可靠的交付体验。', en:'From raw material integration to processing equipment deployment, KSC provides a more complete capacity chain for reliable delivery.', th:'ตั้งแต่การรวมวัตถุดิบจนถึงการจัดวางเครื่องจักร KSC สร้างห่วงโซ่กำลังการผลิตที่ครบถ้วนกว่าเพื่อการส่งมอบที่เชื่อถือได้', vi:'Tu tich hop nguyen lieu den bo tri thiet bi gia cong, KSC tao ra chuoi cong suat hoan chinh hon cho giao hang dang tin cay.' },
    stats_years: { zh:'年深耕行业', en:'Years in the Industry', th:'ปีในอุตสาหกรรม', vi:'Nam trong nganh' },
    stats_bases: { zh:'大生产基地', en:'Major Production Bases', th:'ฐานการผลิตหลัก', vi:'Co so san xuat chinh' },
    stats_machines: { zh:'台加工设备', en:'Processing Machines', th:'เครื่องจักรแปรรูป', vi:'Thiet bi gia cong' },
    stats_clients: { zh:'合作客户', en:'Cooperative Customers', th:'ลูกค้าร่วมงาน', vi:'Khach hang hop tac' },
    timeline_title: { zh:'发展历程', en:'Growth Timeline', th:'พัฒนาการของบริษัท', vi:'Hanh trinh phat trien' },
    timeline_desc: { zh:'从香港到全球制造网络，逐步形成面向亚洲市场的稳定布局。', en:'From Hong Kong to a broader manufacturing network, KSC has steadily built a stable footprint across Asia.', th:'จากฮ่องกงสู่เครือข่ายการผลิตที่กว้างขึ้น KSC ค่อยๆ สร้างฐานที่มั่นคงทั่วเอเชีย', vi:'Tu Hong Kong den mang luoi san xuat rong hon, KSC tung buoc xay dung hien dien on dinh tai chau A.' },
    t2000: { zh:'香港注册成立高顺昌', en:'KSC was established in Hong Kong', th:'KSC จดทะเบียนก่อตั้งที่ฮ่องกง', vi:'KSC duoc thanh lap tai Hong Kong' },
    t2001: { zh:'深圳高顺昌投产', en:'KSC Shenzhen started operations', th:'KSC Shenzhen เริ่มดำเนินงาน', vi:'KSC Shenzhen di vao hoat dong' },
    t2010: { zh:'苏州高万昌投产', en:'KSC Suzhou started operations', th:'KSC Suzhou เริ่มดำเนินงาน', vi:'KSC Suzhou di vao hoat dong' },
    t2018: { zh:'深圳高顺昌迁至东莞', en:'KSC Shenzhen relocated to Dongguan', th:'KSC Shenzhen ย้ายไปตงก่วน', vi:'KSC Shenzhen chuyen den Dongguan' },
    t2022: { zh:'新余高万昌投产', en:'KSC Xinyu started operations', th:'KSC Xinyu เริ่มดำเนินงาน', vi:'KSC Xinyu di vao hoat dong' },
    t2023: { zh:'越南高顺昌投产', en:'KSC Vietnam started operations', th:'KSC Vietnam เริ่มดำเนินงาน', vi:'KSC Vietnam di vao hoat dong' },
    t2025: { zh:'泰国高顺昌投产', en:'KSC Thailand started operations', th:'KSC Thailand เริ่มดำเนินงาน', vi:'KSC Thailand di vao hoat dong' },
    honor_title: { zh:'荣誉资质', en:'Enterprise Honors', th:'เกียรติและการรับรอง', vi:'Chung nhan va vinh danh' },
    cert1: { zh:'2015 质量管理', en:'2015 Quality Management', th:'2015 การจัดการคุณภาพ', vi:'2015 Quan ly chat luong' },
    cert2: { zh:'2015 环境管理', en:'2015 Environmental Management', th:'2015 การจัดการสิ่งแวดล้อม', vi:'2015 Quan ly moi truong' },
    cert3: { zh:'2018 职业健康', en:'2018 Occupational Health', th:'2018 อาชีวอนามัย', vi:'2018 Suc khoe nghe nghiep' },
    cert4: { zh:'汽车行业认证', en:'Automotive Certification', th:'การรับรองอุตสาหกรรมยานยนต์', vi:'Chung nhan nganh oto' },
    fac_dg: { zh:'东莞工厂', en:'Dongguan Factory', th:'โรงงานตงก่วน', vi:'Nha may Dongguan' },
    fac_sz: { zh:'苏州工厂', en:'Suzhou Factory', th:'โรงงานซูโจว', vi:'Nha may Suzhou' },
    fac_xy: { zh:'新余工厂', en:'Xinyu Factory', th:'โรงงานซินหยู', vi:'Nha may Xinyu' },
    fac_vn: { zh:'越南海防工厂', en:'Haiphong Factory', th:'โรงงานไฮฟอง', vi:'Nha may Hai Phong' },
    fac_th: { zh:'泰国春武里工厂', en:'Chon Buri Factory', th:'โรงงานชลบุรี', vi:'Nha may Chon Buri' },
    cta_title: { zh:'立即联系我们', en:'Contact Us Today', th:'ติดต่อเราวันนี้', vi:'Lien he ngay hom nay' },
    cta_desc: { zh:'无论是材料咨询、试样需求还是合作洽谈，我们的销售团队都可以快速响应。', en:'Whether you need material consultation, samples or business discussion, our sales team can respond quickly.', th:'ไม่ว่าจะเป็นการสอบถามวัสดุ ขอชิ้นตัวอย่าง หรือคุยความร่วมมือ ทีมขายของเราพร้อมตอบกลับอย่างรวดเร็ว', vi:'Du la tu van vat lieu, nhu cau mau thu hay trao doi hop tac, doi ngu kinh doanh cua chung toi deu co the phan hoi nhanh.' },
    cta_btn1: { zh:'发送询价', en:'Send Inquiry', th:'ส่งคำขอราคา', vi:'Gui yeu cau bao gia' },
    cta_btn2: { zh:'微信 / 邮件联系', en:'WeChat / Email', th:'WeChat / อีเมล', vi:'WeChat / Email' },
    rfq_kicker: { zh:'Fast Inquiry', en:'Fast Inquiry', th:'สอบถามรวดเร็ว', vi:'Hoi gia nhanh' },
    rfq_title: { zh:'把牌号、厚度、宽度和用途发给我们，快速匹配材料与加工方案', en:'Send grade, thickness, width and application for fast material and processing matching', th:'ส่งเกรด ความหนา ความกว้าง และการใช้งาน เพื่อจับคู่วัสดุและการแปรรูปได้เร็วขึ้น', vi:'Gui mac, do day, chieu rong va ung dung de goi y vat lieu va gia cong nhanh' },
    rfq_desc: { zh:'KSC 可按特钢、矽钢片、铝材、不锈钢、铜材需求，协助确认库存、加工方式、包装和交付节奏。', en:'KSC can support stock checks, processing methods, packaging and delivery plans for special steel, silicon steel, aluminum, stainless steel and copper.', th:'KSC ช่วยตรวจสอบสต็อก วิธีแปรรูป บรรจุภัณฑ์ และแผนส่งมอบสำหรับเหล็กพิเศษ เหล็กซิลิคอน อะลูมิเนียม สแตนเลส และทองแดง', vi:'KSC ho tro kiem tra ton kho, phuong an gia cong, dong goi va giao hang cho thep dac biet, thep silicon, nhom, inox va dong.' },
    rfq_btn: { zh:'提交询价', en:'Submit Inquiry', th:'ส่งคำขอราคา', vi:'Gui yeu cau bao gia' },
    rfq_products: { zh:'查看材料范围', en:'View Material Range', th:'ดูขอบเขตวัสดุ', vi:'Xem danh muc vat lieu' },
    flow_kicker: { zh:'How We Support', en:'How We Support', th:'วิธีที่เราสนับสนุน', vi:'Cach chung toi ho tro' },
    flow_title: { zh:'从询价到交付的协同流程', en:'Coordinated workflow from inquiry to delivery', th:'กระบวนการประสานงานตั้งแต่สอบถามถึงส่งมอบ', vi:'Quy trinh phoi hop tu hoi gia den giao hang' },
    flow_desc: { zh:'让采购、工程和生产团队更容易确认材料，减少反复沟通。', en:'Helping purchasing, engineering and production teams confirm materials with fewer back-and-forth discussions.', th:'ช่วยให้ฝ่ายจัดซื้อ วิศวกรรม และผลิตยืนยันวัสดุได้ง่ายขึ้น ลดการสื่อสารซ้ำ', vi:'Giup mua hang, ky thuat va san xuat xac nhan vat lieu de dang hon, giam trao doi lap lai.' },
    flow1_title: { zh:'需求确认', en:'Requirement Check', th:'ยืนยันความต้องการ', vi:'Xac nhan yeu cau' },
    flow1_desc: { zh:'确认牌号、状态、厚度、宽度、表面、硬度、用途和年用量。', en:'Confirm grade, temper, thickness, width, surface, hardness, application and annual volume.', th:'ยืนยันเกรด สภาพ ความหนา ความกว้าง ผิว ความแข็ง การใช้งาน และปริมาณต่อปี', vi:'Xac nhan mac, trang thai, do day, rong, be mat, do cung, ung dung va san luong nam.' },
    flow2_title: { zh:'材料与工艺建议', en:'Material And Process Advice', th:'คำแนะนำวัสดุและกระบวนการ', vi:'Tu van vat lieu va quy trinh' },
    flow2_desc: { zh:'结合应用场景推荐材料替代、分条、剪板、冷轧或退火方案。', en:'Recommend substitution, slitting, shearing, cold rolling or annealing based on application.', th:'แนะนำวัสดุทดแทน การตัดแถบ ตัดแผ่น รีดเย็น หรืออบอ่อนตามการใช้งาน', vi:'De xuat thay the, xe bang, cat tam, can lanh hoac u theo ung dung.' },
    flow3_title: { zh:'加工与包装', en:'Processing And Packaging', th:'การแปรรูปและบรรจุ', vi:'Gia cong va dong goi' },
    flow3_desc: { zh:'按客户尺寸、公差、毛刺、卷重、包装和标签要求安排生产。', en:'Arrange production by size, tolerance, burr, coil weight, packaging and labeling needs.', th:'จัดผลิตตามขนาด พิกัด ครีบ น้ำหนักม้วน บรรจุภัณฑ์ และฉลาก', vi:'San xuat theo kich thuoc, dung sai, ba via, trong luong cuon, dong goi va nhan.' },
    flow4_title: { zh:'交付跟进', en:'Delivery Follow-Up', th:'ติดตามการส่งมอบ', vi:'Theo doi giao hang' },
    flow4_desc: { zh:'中国、越南、泰国基地协同支持稳定交期和持续供货。', en:'China, Vietnam and Thailand bases coordinate for stable lead times and supply continuity.', th:'ฐานในจีน เวียดนาม และไทยประสานงานเพื่อระยะส่งมอบที่มั่นคง', vi:'Co so Trung Quoc, Viet Nam va Thai Lan phoi hop de on dinh giao hang va cung ung.' },
    footer_brand: { zh:'高顺昌控股有限公司（KSC）专注金属材料行业超过25年，是中国、越南、泰国领先的金属材料供应商。', en:'KSC has focused on metal materials for over 25 years and is a leading supplier across China, Vietnam and Thailand.', th:'KSC มุ่งเน้นวัสดุโลหะมากว่า 25 ปี และเป็นผู้จัดหาชั้นนำในจีน เวียดนาม และไทย', vi:'KSC tap trung vao vat lieu kim loai hon 25 nam va la nha cung cap hang dau tai Trung Quoc, Viet Nam va Thai Lan.' },
    footer_scan: { zh:'扫码加微信', en:'Scan to add WeChat', th:'สแกนเพื่อเพิ่ม WeChat', vi:'Quet ma de ket noi WeChat' },
    footer_link1: { zh:'首页', en:'Home', th:'หน้าแรก', vi:'Trang chu' },
    footer_link2: { zh:'关于我们', en:'About Us', th:'เกี่ยวกับเรา', vi:'Ve chung toi' },
    footer_link3: { zh:'产品中心', en:'Products', th:'ผลิตภัณฑ์', vi:'San pham' },
    footer_link_app: { zh:'应用案例', en:'Applications', th:'กรณีใช้งาน', vi:'Ung dung' },
    footer_link4: { zh:'生产基地', en:'Factory Network', th:'ฐานการผลิต', vi:'Mang luoi nha may' },
    footer_link5: { zh:'联系我们', en:'Contact Us', th:'ติดต่อเรา', vi:'Lien he' },
    footer_prod1: { zh:'特钢/精冲钢', en:'Special Steel / Fineblanking Steel', th:'เหล็กพิเศษ / เหล็กปั๊มละเอียด', vi:'Thep dac biet / Thep dap chinh xac' },
    footer_prod2: { zh:'矽钢片', en:'Silicon Steel', th:'เหล็กซิลิคอน', vi:'Thep silicon' },
    footer_prod3: { zh:'铝材', en:'Aluminum', th:'อะลูมิเนียม', vi:'Nhom' },
    footer_prod4: { zh:'不锈钢', en:'Stainless Steel', th:'สแตนเลส', vi:'Thep khong gi' },
    footer_prod5: { zh:'铜材', en:'Copper', th:'ทองแดง', vi:'Dong' },
    footer_contact1: { zh:'香港总部 HQ', en:'Hong Kong Headquarters', th:'สำนักงานใหญ่ฮ่องกง', vi:'Tru so Hong Kong' },
    footer_contact2: { zh:'东莞/深圳工厂', en:'Dongguan / Shenzhen Plant', th:'โรงงานตงก่วน / เซินเจิ้น', vi:'Nha may Dongguan / Shenzhen' },
    footer_contact3: { zh:'越南工厂', en:'Vietnam Plant', th:'โรงงานเวียดนาม', vi:'Nha may Viet Nam' },
    footer_contact4: { zh:'泰国工厂', en:'Thailand Plant', th:'โรงงานไทย', vi:'Nha may Thai Lan' },
    float_wechat: { zh:'微信联系', en:'WeChat Us', th:'ติดต่อผ่าน WeChat', vi:'Lien he WeChat' }
  },
  factoryPage: {
    process_title: { zh:'加工业务介绍', en:'Processing Introduction', th:'ภาพรวมงานแปรรูป', vi:'Gioi thieu nang luc gia cong' },
    process_desc: { zh:'四大核心加工能力', en:'Four core processing capabilities', th:'4 ความสามารถหลักด้านการแปรรูป', vi:'4 nang luc gia cong cot loi' },
    process1: { zh:'分条 / 纵剪', en:'Slitting', th:'ตัดแบ่งม้วน', vi:'Xe bang / cat doc' },
    process2: { zh:'剪板 / 横切', en:'Shearing', th:'ตัดแผ่น', vi:'Cat tam / cat ngang' },
    process3: { zh:'压延 / 冷轧', en:'Cold-Rolling', th:'รีดเย็น', vi:'Can lanh' },
    process4: { zh:'退火 / 球化退火', en:'Annealing', th:'อบอ่อน / สเฟอรอยด์', vi:'U / cau hoa u' },
    loc_dg: { zh:'广东省东莞市大朗镇大朗水新路218号201室', en:'Room 201, No. 218 Dalang Shuixin Road, Dalang Town, Dongguan, Guangdong, China', th:'ห้อง 201 เลขที่ 218 ถนน Dalang Shuixin เมืองตงก่วน มณฑลกวางตุ้ง จีน', vi:'Phong 201, so 218 duong Dalang Shuixin, thi tran Dalang, Dongguan, Quang Dong, Trung Quoc' },
    loc_sz: { zh:'昆山市高新技术开发区迎宾中路1299号', en:'No. 1299 Yingbin Middle Road, Kunshan High-Tech Industrial Development Zone, Jiangsu, China', th:'เลขที่ 1299 ถนน Yingbin Middle เขตพัฒนาเทคโนโลยีสูงคุนซาน มณฑลเจียงซู จีน', vi:'So 1299 duong Yingbin Middle, Khu phat trien cong nghe cao Kunshan, Giang To, Trung Quoc' },
    loc_xy: { zh:'江西省新余市渝水区新余经济开发区钢城装备制造园D地块3号厂房', en:'Plant 3, Plot D, Steel City Equipment Manufacturing Park, Xinyu Economic Development Zone, Yushui District, Xinyu, Jiangxi, China', th:'โรงงานเลขที่ 3 แปลง D สวนอุตสาหกรรม Steel City Equipment Manufacturing เขตพัฒนาเศรษฐกิจ Xinyu เจียงซี จีน', vi:'Nha xuong so 3, Lo D, Khu che tao thiet bi Gangcheng, Khu phat trien kinh te Xinyu, quan Yushui, Xinyu, Giang Tay, Trung Quoc' },
    loc_vn: { zh:'越南海防市安峰坊安阳工业园区CN9地块C-14地块', en:'Plot C-14, CN9 Area, An Duong Industrial Park, An Phong Ward, Haiphong, Vietnam', th:'แปลง C-14 พื้นที่ CN9 นิคมอุตสาหกรรม An Duong เขต An Phong เมืองไฮฟอง เวียดนาม', vi:'Lo C-14, khu CN9, Khu cong nghiep An Duong, phuong An Phong, Hai Phong, Viet Nam' },
    loc_th: { zh:'泰国春武里府班奔县克朗久区第7巷53/2号', en:'No. 53/2, Soi 7, Khlong Kio Subdistrict, Ban Bueng District, Chon Buri, Thailand', th:'เลขที่ 53/2 ซอย 7 ตำบลคลองกิ่ว อำเภอบ้านบึง จังหวัดชลบุรี ประเทศไทย', vi:'So 53/2, Ngo 7, Xa Khlong Kio, Huyen Ban Bueng, Chon Buri, Thai Lan' },
    cap_slit: { zh:'分条 Slitting', en:'Slitting', th:'ตัดแบ่งม้วน', vi:'Xe bang' },
    cap_shear: { zh:'剪板 Shearing', en:'Shearing', th:'ตัดแผ่น', vi:'Cat tam' },
    cap_roll: { zh:'冷轧 Cold-Rolling', en:'Cold-Rolling', th:'รีดเย็น', vi:'Can lanh' },
    cap_anneal: { zh:'退火 Annealing', en:'Annealing', th:'อบอ่อน', vi:'U' }
  },
  productsPage: {
    steel_desc: { zh:'广泛应用于汽车、电子、五金、精密零部件等行业', en:'Widely used in automotive, electronics, hardware and precision component industries.', th:'ใช้อย่างแพร่หลายในอุตสาหกรรมยานยนต์ อิเล็กทรอนิกส์ ฮาร์ดแวร์ และชิ้นส่วนความแม่นยำ', vi:'Duoc ung dung rong rai trong nganh o to, dien tu, kim khi va linh kien chinh xac.' },
    alum_desc: { zh:'涵盖建筑、交通、电子、包装等多个领域', en:'Serving construction, transportation, electronics, packaging and more.', th:'ครอบคลุมงานก่อสร้าง คมนาคม อิเล็กทรอนิกส์ บรรจุภัณฑ์ และอีกหลายด้าน', vi:'Phuc vu xay dung, giao thong, dien tu, bao bi va nhieu linh vuc khac.' },
    ss_desc: { zh:'耐腐蚀、高强度，广泛用于食品、医疗、建筑等行业', en:'Corrosion-resistant and high-strength, widely used in food, medical and construction sectors.', th:'ทนการกัดกร่อน แข็งแรงสูง ใช้มากในอุตสาหกรรมอาหาร การแพทย์ และก่อสร้าง', vi:'Chong an mon, do ben cao, duoc dung nhieu trong thuc pham, y te va xay dung.' },
    sil_desc: { zh:'无取向/取向矽钢片，应用于电机、变压器等电气设备', en:'Non-oriented and grain-oriented silicon steel for motors, transformers and other electrical equipment.', th:'เหล็กซิลิคอนไม่กำหนดทิศทางและกำหนดทิศทาง สำหรับมอเตอร์ หม้อแปลง และอุปกรณ์ไฟฟ้าอื่นๆ', vi:'Thep silicon vo huong va dinh huong dung cho dong co, may bien ap va thiet bi dien.' },
    coil_title: { zh:'热轧/冷轧卷', en:'Hot-Rolled / Cold-Rolled Steel', th:'เหล็กม้วนร้อน / เย็น', vi:'Thep can nong / can nguoi' },
    copper_title: { zh:'铜材', en:'Copper', th:'ทองแดง', vi:'Dong' },
    th_grade: { zh:'牌号', en:'Grade', th:'เกรด', vi:'Mac thep' },
    th_alloy: { zh:'合金牌号', en:'Alloy Grade', th:'เกรดโลหะผสม', vi:'Mac hop kim' },
    th_product: { zh:'产品', en:'Product', th:'ผลิตภัณฑ์', vi:'San pham' },
    th_app: { zh:'主要应用', en:'Applications', th:'การใช้งานหลัก', vi:'Ung dung chinh' },
    th_type: { zh:'类型', en:'Type', th:'ประเภท', vi:'Loai' },
    steel_r1: { zh:'机械零件、五金工具', en:'Mechanical parts, hardware tools', th:'ชิ้นส่วนเครื่องจักรและเครื่องมือฮาร์ดแวร์', vi:'Chi tiet co khi, dung cu kim khi' },
    steel_r2: { zh:'弹簧、发条、刃具', en:'Springs, clock springs, cutting tools', th:'สปริง ลาน และเครื่องมือตัด', vi:'Lo xo, day cot, dung cu cat' },
    steel_r3: { zh:'汽车悬架、弹簧', en:'Automotive suspension, springs', th:'ช่วงล่างรถยนต์และสปริง', vi:'He treo o to, lo xo' },
    steel_r4: { zh:'齿轮、轴承', en:'Gears, bearings', th:'เฟืองและตลับลูกปืน', vi:'Banh rang, o bi' },
    steel_r5: { zh:'高强度结构件', en:'High-strength structural parts', th:'ชิ้นส่วนโครงสร้างกำลังสูง', vi:'Ket cau cuong do cao' },
    alum_r1: { zh:'散热片、导电体', en:'Heat sinks, conductors', th:'ฮีตซิงก์และตัวนำไฟฟ้า', vi:'Tan nhiet, vat dan dien' },
    alum_r2: { zh:'建筑装饰、钣金', en:'Architectural decoration, sheet metal', th:'ตกแต่งอาคารและงานแผ่นโลหะ', vi:'Trang tri kien truc, ton tam' },
    alum_r3: { zh:'船舶、航空、重型结构', en:'Marine, aerospace, heavy structures', th:'เรือ อากาศยาน และโครงสร้างหนัก', vi:'Tau thuyen, hang khong, ket cau nang' },
    alum_r4: { zh:'航空结构、模具、精密零件', en:'Aerospace structures, molds, precision parts', th:'โครงสร้างอากาศยาน แม่พิมพ์ และชิ้นส่วนแม่นยำ', vi:'Ket cau hang khong, khuon mau, linh kien chinh xac' },
    ss_r1: { zh:'装饰、建筑、食品设备', en:'Decoration, construction, food equipment', th:'งานตกแต่ง ก่อสร้าง และอุปกรณ์อาหาร', vi:'Trang tri, xay dung, thiet bi thuc pham' },
    ss_r2: { zh:'船舶、化工、医疗设备', en:'Marine, chemical, medical equipment', th:'เรือ เคมีภัณฑ์ และอุปกรณ์การแพทย์', vi:'Hang hai, hoa chat, thiet bi y te' },
    ss_r3: { zh:'汽车排气系统', en:'Automotive exhaust systems', th:'ระบบไอเสียรถยนต์', vi:'He thong xa khi o to' },
    ss_r4: { zh:'弹簧、刃具、医疗器械', en:'Springs, cutting tools, medical devices', th:'สปริง เครื่องมือตัด และอุปกรณ์การแพทย์', vi:'Lo xo, dung cu cat, thiet bi y te' },
    sil_r1: { zh:'电机、压缩机马达', en:'Motors, compressor motor cores', th:'มอเตอร์และแกนมอเตอร์คอมเพรสเซอร์', vi:'Dong co, loi dong co may nen' },
    sil_r2: { zh:'变压器铁芯', en:'Transformer cores', th:'แกนหม้อแปลง', vi:'Loi may bien ap' },
    sil_p1: { zh:'无取向矽钢片', en:'Cold Rolled Non-Oriented', th:'เหล็กซิลิคอนไม่กำหนดทิศทาง', vi:'Thep silicon vo huong' },
    sil_p2: { zh:'取向矽钢片', en:'Grain Oriented', th:'เหล็กซิลิคอนกำหนดทิศทาง', vi:'Thep silicon dinh huong' },
    coil_r1: { zh:'热轧', en:'Hot-rolled', th:'รีดร้อน', vi:'Can nong' },
    coil_r2: { zh:'冷轧', en:'Cold-rolled', th:'รีดเย็น', vi:'Can nguoi' },
    coil_r3: { zh:'电镀锌', en:'Electro-galvanized', th:'ชุบสังกะสีไฟฟ้า', vi:'Ma kem dien' },
    coil_r4: { zh:'热镀锌', en:'Hot-dipped galvanized', th:'ชุบสังกะสีจุ่มร้อน', vi:'Ma kem nhung nong' },
    copper_r1: { zh:'带材、线材', en:'Strip, wire', th:'แถบและลวด', vi:'Bang, day' },
    copper_r2: { zh:'弹簧、连接器', en:'Springs, connectors', th:'สปริงและคอนเนกเตอร์', vi:'Lo xo, dau noi' },
    copper_r3: { zh:'热交换器、管道', en:'Heat exchangers, piping', th:'เครื่องแลกเปลี่ยนความร้อนและท่อ', vi:'Bo trao doi nhiet, duong ong' },
    copper_r4: { zh:'高强度应用', en:'High-strength applications', th:'งานกำลังสูง', vi:'Ung dung cuong do cao' },
    selector_kicker: { zh:'Selection Guide', en:'Selection Guide', th:'คู่มือเลือกวัสดุ', vi:'Huong dan chon vat lieu' },
    selector_title: { zh:'按材料、工艺和应用快速选型', en:'Select quickly by material, process and application', th:'เลือกวัสดุอย่างรวดเร็วตามวัสดุ กระบวนการ และการใช้งาน', vi:'Chon nhanh theo vat lieu, quy trinh va ung dung' },
    selector_desc: { zh:'采购询价时可优先确认材料类别、典型牌号、加工方式和终端应用，KSC 可据此快速反馈库存与加工建议。', en:'For inquiry, confirm material category, typical grades, processing method and application so KSC can reply faster on stock and processing suggestions.', th:'เมื่อต้องการสอบถามราคา ให้ยืนยันประเภทวัสดุ เกรด กระบวนการ และการใช้งาน เพื่อให้ KSC ตอบเรื่องสต็อกและการแปรรูปได้เร็วขึ้น', vi:'Khi hoi gia, xac nhan loai vat lieu, mac tieu bieu, cach gia cong va ung dung de KSC phan hoi ton kho va de xuat nhanh hon.' },
    sel_steel_title: { zh:'特钢 / 精冲钢', en:'Special Steel / Fineblanking Steel', th:'เหล็กพิเศษ / เหล็กปั๊มละเอียด', vi:'Thep dac biet / thep dap chinh xac' },
    sel_steel_meta: { zh:'汽车齿轮、弹簧、轴类、精密冲压件', en:'Automotive gears, springs, shafts and precision stampings', th:'เฟืองรถยนต์ สปริง เพลา และชิ้นส่วนปั๊มแม่นยำ', vi:'Banh rang o to, lo xo, truc va linh kien dap chinh xac' },
    sel_alum_title: { zh:'铝材', en:'Aluminum', th:'อะลูมิเนียม', vi:'Nhom' },
    sel_alum_meta: { zh:'散热片、电池壳、电子外壳、轻量化结构', en:'Heat sinks, battery housings, electronic cases and lightweight structures', th:'ฮีตซิงก์ กล่องแบตเตอรี่ เคสอิเล็กทรอนิกส์ และโครงสร้างน้ำหนักเบา', vi:'Tan nhiet, vo pin, vo dien tu va ket cau nhe' },
    sel_sil_title: { zh:'矽钢片', en:'Silicon Steel', th:'เหล็กซิลิคอน', vi:'Thep silicon' },
    sel_sil_meta: { zh:'电机定转子、变压器铁芯、压缩机马达', en:'Motor laminations, transformer cores and compressor motors', th:'แผ่นมอเตอร์ แกนหม้อแปลง และมอเตอร์คอมเพรสเซอร์', vi:'La dong co, loi may bien ap va dong co may nen' },
    sel_ss_title: { zh:'不锈钢 / 铜材', en:'Stainless Steel / Copper', th:'สแตนเลส / ทองแดง', vi:'Inox / Dong' },
    sel_ss_meta: { zh:'连接器、弹片、导电片、耐腐蚀结构件', en:'Connectors, springs, conductive strips and corrosion-resistant structures', th:'คอนเนกเตอร์ สปริง แถบนำไฟฟ้า และโครงสร้างทนกัดกร่อน', vi:'Dau noi, la dan hoi, bang dan dien va ket cau chong an mon' }
  },
  contactPage: {
    locations: { zh:'我们的据点', en:'Our Locations', th:'ที่ตั้งของเรา', vi:'Cac dia diem cua chung toi' },
    hq: { zh:'香港总部', en:'Hong Kong Headquarters', th:'สำนักงานใหญ่ฮ่องกง', vi:'Tru so Hong Kong' },
    dg: { zh:'深圳/东莞工厂', en:'Shenzhen / Dongguan Plant', th:'โรงงานเซินเจิ้น / ตงก่วน', vi:'Nha may Shenzhen / Dongguan' },
    sz: { zh:'苏州工厂', en:'Suzhou Plant', th:'โรงงานซูโจว', vi:'Nha may Suzhou' },
    xy: { zh:'新余工厂', en:'Xinyu Plant', th:'โรงงานซินหยู', vi:'Nha may Xinyu' },
    vn: { zh:'越南工厂', en:'Haiphong Plant', th:'โรงงานไฮฟอง', vi:'Nha may Hai Phong' },
    th: { zh:'泰国工厂', en:'Chon Buri Plant', th:'โรงงานชลบุรี', vi:'Nha may Chon Buri' },
    dg_loc: { zh:'广东省东莞市大朗镇大朗水新路218号201室', en:'Room 201, No. 218 Dalang Shuixin Road, Dalang Town, Dongguan, Guangdong, China', th:'ห้อง 201 เลขที่ 218 ถนน Dalang Shuixin เมืองตงก่วน มณฑลกวางตุ้ง จีน', vi:'Phong 201, so 218 duong Dalang Shuixin, thi tran Dalang, Dongguan, Quang Dong, Trung Quoc' },
    sz_loc: { zh:'昆山市高新技术开发区迎宾中路1299号', en:'No. 1299 Yingbin Middle Road, Kunshan High-Tech Industrial Development Zone, Jiangsu, China', th:'เลขที่ 1299 ถนน Yingbin Middle เขตพัฒนาเทคโนโลยีสูงคุนซาน มณฑลเจียงซู จีน', vi:'So 1299 duong Yingbin Middle, Khu phat trien cong nghe cao Kunshan, Giang To, Trung Quoc' },
    xy_loc: { zh:'江西省新余市渝水区新余经济开发区钢城装备制造园D地块3号厂房', en:'Plant 3, Plot D, Steel City Equipment Manufacturing Park, Xinyu Economic Development Zone, Yushui District, Xinyu, Jiangxi, China', th:'โรงงานเลขที่ 3 แปลง D สวนอุตสาหกรรม Steel City Equipment Manufacturing เขตพัฒนาเศรษฐกิจ Xinyu เจียงซี จีน', vi:'Nha xuong so 3, Lo D, Khu che tao thiet bi Gangcheng, Khu phat trien kinh te Xinyu, quan Yushui, Xinyu, Giang Tay, Trung Quoc' },
    vn_loc: { zh:'越南海防市安峰坊安阳工业园区CN9地块C-14地块', en:'Plot C-14, CN9 Area, An Duong Industrial Park, An Phong Ward, Haiphong, Vietnam', th:'แปลง C-14 พื้นที่ CN9 นิคมอุตสาหกรรม An Duong เขต An Phong เมืองไฮฟอง เวียดนาม', vi:'Lo C-14, khu CN9, Khu cong nghiep An Duong, phuong An Phong, Hai Phong, Viet Nam' },
    th_loc: { zh:'泰国春武里府班奔县克朗久区第7巷53/2号', en:'No. 53/2, Soi 7, Khlong Kio Subdistrict, Ban Bueng District, Chon Buri, Thailand', th:'เลขที่ 53/2 ซอย 7 ตำบลคลองกิ่ว อำเภอบ้านบึง จังหวัดชลบุรี ประเทศไทย', vi:'So 53/2, Ngo 7, Xa Khlong Kio, Huyen Ban Bueng, Chon Buri, Thai Lan' },
    sales: { zh:'销售代表', en:'Sales Representative', th:'ผู้แทนฝ่ายขาย', vi:'Dai dien kinh doanh' },
    name: { zh:'姓名', en:'Name', th:'ชื่อ', vi:'Ten' },
    email: { zh:'邮箱', en:'Email', th:'อีเมล', vi:'Email' },
    wechat: { zh:'微信联系', en:'Contact via WeChat', th:'ติดต่อผ่าน WeChat', vi:'Lien he qua WeChat' },
    wechat_desc: { zh:'扫码识别，备注"询价"更快响应', en:'Scan the QR code and note \"inquiry\" for a faster reply.', th:'สแกนคิวอาร์และพิมพ์ว่า \"inquiry\" เพื่อให้ตอบกลับได้เร็วขึ้น', vi:'Quet ma QR va ghi chu \"inquiry\" de duoc phan hoi nhanh hon.' },
    whatsapp: { zh:'WhatsApp 联系', en:'Contact via WhatsApp', th:'ติดต่อผ่าน WhatsApp', vi:'Lien he qua WhatsApp' },
    whatsapp_desc: { zh:'使用 WhatsApp 扫码添加胡健，适合海外客户快速沟通询价。', en:'Scan with WhatsApp to add Hu Jian for fast overseas inquiries.', th:'สแกนด้วย WhatsApp เพื่อเพิ่ม Hu Jian เหมาะสำหรับลูกค้าต่างประเทศที่ต้องการสอบถามรวดเร็ว', vi:'Quet bang WhatsApp de them Hu Jian, phu hop cho khach hang nuoc ngoai hoi gia nhanh.' },
    placeholder_name: { zh:'您的姓名', en:'Your Name', th:'ชื่อของคุณ', vi:'Ten cua ban' },
    placeholder_email: { zh:'您的邮箱', en:'Your Email', th:'อีเมลของคุณ', vi:'Email cua ban' },
    placeholder_company: { zh:'公司名称', en:'Company Name', th:'ชื่อบริษัท', vi:'Ten cong ty' },
    placeholder_product: { zh:'咨询产品（如：特钢/铝材/不锈钢）', en:'Product Interest (e.g. Special Steel / Aluminum / Stainless Steel)', th:'สินค้าที่สนใจ (เช่น เหล็กพิเศษ / อะลูมิเนียม / สแตนเลส)', vi:'San pham quan tam (vi du: Thep dac biet / Nhom / Thep khong gi)' },
    placeholder_grade: { zh:'材料牌号（如：S45C / AL6061 / SUS301）', en:'Material Grade (e.g. S45C / AL6061 / SUS301)', th:'เกรดวัสดุ (เช่น S45C / AL6061 / SUS301)', vi:'Mac vat lieu (vi du: S45C / AL6061 / SUS301)' },
    placeholder_spec: { zh:'厚度 / 宽度 / 长度 / 公差', en:'Thickness / Width / Length / Tolerance', th:'ความหนา / ความกว้าง / ความยาว / พิกัด', vi:'Do day / Rong / Dai / Dung sai' },
    placeholder_quantity: { zh:'数量 / 月用量 / 年用量', en:'Quantity / Monthly Volume / Annual Volume', th:'จำนวน / ปริมาณต่อเดือน / ปริมาณต่อปี', vi:'So luong / San luong thang / San luong nam' },
    placeholder_process: { zh:'加工方式（分条 / 剪板 / 冷轧 / 退火）', en:'Processing (Slitting / Shearing / Cold Rolling / Annealing)', th:'วิธีแปรรูป (ตัดแถบ / ตัดแผ่น / รีดเย็น / อบอ่อน)', vi:'Gia cong (Xe bang / Cat tam / Can lanh / U)' },
    placeholder_application: { zh:'应用场景（齿轮 / 弹片 / 电池壳 / 电机铁芯）', en:'Application (Gear / Spring / Battery Case / Motor Core)', th:'การใช้งาน (เฟือง / สปริง / กล่องแบตเตอรี่ / แกนมอเตอร์)', vi:'Ung dung (Banh rang / La dan hoi / Vo pin / Loi dong co)' },
    placeholder_message: { zh:'请输入您的留言...', en:'Please enter your message...', th:'กรุณากรอกข้อความของคุณ...', vi:'Vui long nhap loi nhan cua ban...' },
    submit: { zh:'发送留言', en:'Send Message', th:'ส่งข้อความ', vi:'Gui tin nhan' },
    sent: { zh:'已发送 ✓', en:'Sent ✓', th:'ส่งแล้ว ✓', vi:'Da gui ✓' },
    quote_kicker: { zh:'Request A Quote', en:'Request A Quote', th:'ขอใบเสนอราคา', vi:'Yeu cau bao gia' },
    quote_title: { zh:'让询价更快回复', en:'Help us reply to your inquiry faster', th:'ช่วยให้เราตอบกลับได้เร็วขึ้น', vi:'Giup chung toi phan hoi nhanh hon' },
    quote_desc: { zh:'建议在留言中写明材料牌号、规格、数量、用途、加工要求和交付地区，我们可以更快判断库存和加工方案。', en:'Please include grade, specification, quantity, application, processing needs and delivery region so we can check stock and processing options faster.', th:'โปรดระบุเกรด สเปก จำนวน การใช้งาน ความต้องการแปรรูป และพื้นที่ส่งมอบ เพื่อให้ตรวจสอบสต็อกและทางเลือกได้เร็วขึ้น', vi:'Vui long ghi mac, quy cach, so luong, ung dung, yeu cau gia cong va khu vuc giao hang de chung toi kiem tra nhanh hon.' },
    quote_s1: { zh:'材料牌号 / 替代牌号', en:'Grade / Substitute Grade', th:'เกรดวัสดุ / เกรดทดแทน', vi:'Mac vat lieu / mac thay the' },
    quote_s2: { zh:'厚度 / 宽度 / 长度 / 公差', en:'Thickness / Width / Length / Tolerance', th:'ความหนา / ความกว้าง / ความยาว / พิกัด', vi:'Do day / rong / dai / dung sai' },
    quote_s3: { zh:'分条 / 剪板 / 冷轧 / 退火', en:'Slitting / Shearing / Cold Rolling / Annealing', th:'ตัดแถบ / ตัดแผ่น / รีดเย็น / อบอ่อน', vi:'Xe bang / cat tam / can lanh / u' },
    quote_s4: { zh:'用量 / 包装 / 交付地区', en:'Volume / Packaging / Delivery Region', th:'ปริมาณ / บรรจุภัณฑ์ / พื้นที่ส่งมอบ', vi:'San luong / dong goi / khu vuc giao hang' }
  },
  applicationsPage: {
    kicker: { zh:'Application Gallery', en:'Application Gallery', th:'แกลเลอรีการใช้งาน', vi:'Thu vien ung dung' },
    title: { zh:'材料应用与零件案例', en:'Material Applications & Part Cases', th:'การใช้งานวัสดุและตัวอย่างชิ้นส่วน', vi:'Ung dung vat lieu va linh kien' },
    subtitle: { zh:'从材料性能到终端零件，帮助客户快速理解为什么这些材料适合汽车、电子与精密制造。', en:'From material properties to finished parts, this page explains why each material fits automotive, electronics and precision manufacturing.', th:'อธิบายตั้งแต่คุณสมบัติวัสดุจนถึงชิ้นส่วนปลายทาง เพื่อช่วยให้ลูกค้าเข้าใจการเลือกวัสดุ', vi:'Tu tinh nang vat lieu den linh kien thanh pham, giup khach hang hieu vi sao vat lieu phu hop voi o to, dien tu va gia cong chinh xac.' },
    map_kicker: { zh:'Material To Part', en:'Material To Part', th:'วัสดุสู่ชิ้นส่วน', vi:'Tu vat lieu den linh kien' },
    map_title: { zh:'材料与典型零件对应关系', en:'Material And Typical Part Mapping', th:'ความสัมพันธ์ระหว่างวัสดุและชิ้นส่วน', vi:'Tuong quan vat lieu va linh kien' },
    map_desc: { zh:'不同材料的强度、导电、导磁、耐腐蚀和轻量化性能，决定了它们在零件上的最佳应用位置。', en:'Strength, conductivity, magnetic performance, corrosion resistance and lightweight properties decide where each material works best.', th:'ความแข็งแรง การนำไฟฟ้า แม่เหล็ก ความทนกัดกร่อน และน้ำหนักเบา เป็นตัวกำหนดตำแหน่งการใช้งาน', vi:'Do ben, dan dien, tu tinh, chong an mon va nhe quyet dinh vi tri ung dung phu hop cua vat lieu.' },
    steel_title: { zh:'特钢：齿轮、弹簧、轴类与结构件', en:'Special Steel: Gears, Springs, Shafts And Structural Parts', th:'เหล็กพิเศษ: เฟือง สปริง เพลา และโครงสร้าง', vi:'Thep dac biet: banh rang, lo xo, truc va ket cau' },
    steel_desc: { zh:'S45C、42CrMo4、65Mn、SCM435 等材料具备高强度、高疲劳寿命和良好热处理响应，适合汽车传动齿轮、悬架弹簧、离合器片、轴类零件和精密冲压结构件。', en:'S45C, 42CrMo4, 65Mn and SCM435 provide high strength, fatigue life and heat-treatment response for automotive gears, springs, clutch plates, shafts and stamped parts.', th:'S45C, 42CrMo4, 65Mn และ SCM435 ให้ความแข็งแรง อายุล้า และการตอบสนองต่อความร้อน เหมาะกับเฟือง สปริง คลัตช์ เพลา และชิ้นส่วนปั๊ม', vi:'S45C, 42CrMo4, 65Mn va SCM435 co do ben cao, tuoi tho moi va dap ung nhiet luyen tot cho banh rang, lo xo, ly hop, truc va linh kien dap.' },
    steel_r1: { zh:'高碳钢和合金钢经过淬火、回火后，可获得更高硬度与抗磨损能力。', en:'Quenching and tempering improve hardness and wear resistance.', th:'การชุบแข็งและอบคืนไฟช่วยเพิ่มความแข็งและทนสึกหรอ', vi:'Toi va ram giup tang do cung va kha nang chong mai mon.' },
    steel_r2: { zh:'铬钼、锰系元素提升淬透性和疲劳强度，适合长期受力和高速运转零件。', en:'Cr-Mo and Mn alloying improves hardenability and fatigue strength.', th:'ธาตุ Cr-Mo และ Mn ช่วยเพิ่มการชุบแข็งและความทนล้า', vi:'Hop kim Cr-Mo va Mn cai thien do tham toi va do ben moi.' },
    steel_r3: { zh:'分条和精密剪切后尺寸稳定，便于客户连续冲压和批量装配。', en:'Precision slitting and shearing support stable stamping and assembly.', th:'การตัดแถบและตัดแผ่นแม่นยำช่วยให้ปั๊มและประกอบได้เสถียร', vi:'Xe bang va cat chinh xac ho tro dap va lap rap on dinh.' },
    alum_title: { zh:'铝材：散热片、电池壳、电子外壳与轻量化部件', en:'Aluminum: Heat Sinks, Battery Housings, Electronic Cases And Lightweight Parts', th:'อะลูมิเนียม: ฮีตซิงก์ กล่องแบตเตอรี่ เคสอิเล็กทรอนิกส์ และชิ้นส่วนน้ำหนักเบา', vi:'Nhom: tan nhiet, vo pin, vo dien tu va linh kien nhe' },
    alum_desc: { zh:'AL6061、AL6063、AL5052、AL7075 兼具轻量化、导热、耐腐蚀和加工性能，常用于新能源电池结构件、电子产品外壳、散热器、支架和汽车轻量化零件。', en:'AL6061, AL6063, AL5052 and AL7075 combine lightweight, heat transfer, corrosion resistance and machinability for EV batteries, electronics, heat sinks and brackets.', th:'AL6061, AL6063, AL5052 และ AL7075 มีน้ำหนักเบา นำความร้อน ทนกัดกร่อน และแปรรูปง่าย เหมาะกับแบตเตอรี่ EV เคสอิเล็กทรอนิกส์ ฮีตซิงก์ และขายึด', vi:'AL6061, AL6063, AL5052 va AL7075 nhe, dan nhiet, chong an mon va de gia cong cho vo pin EV, vo dien tu, tan nhiet va gia do.' },
    alum_r1: { zh:'密度约为钢的三分之一，能明显降低整机重量和运输能耗。', en:'About one-third the density of steel, aluminum reduces part weight.', th:'ความหนาแน่นประมาณหนึ่งในสามของเหล็ก ช่วยลดน้ำหนัก', vi:'Khoi luong rieng bang khoang mot phan ba thep, giup giam trong luong.' },
    alum_r2: { zh:'导热性能好，适合电子散热片、电源模块和电池包热管理结构。', en:'Good thermal conductivity supports heat sinks and battery thermal structures.', th:'นำความร้อนได้ดี เหมาะกับฮีตซิงก์และระบบจัดการความร้อนแบตเตอรี่', vi:'Dan nhiet tot, phu hop tan nhiet va cau truc quan ly nhiet pin.' },
    alum_r3: { zh:'阳极氧化和表面处理适配性强，能兼顾外观、耐腐蚀和绝缘要求。', en:'Surface treatment options balance appearance, corrosion resistance and insulation.', th:'รองรับการชุบผิว ช่วยด้านรูปลักษณ์ ทนกัดกร่อน และฉนวน', vi:'Xu ly be mat tot, can bang tham my, chong an mon va cach dien.' },
    sil_title: { zh:'矽钢片：电机定转子、变压器铁芯与压缩机马达', en:'Silicon Steel: Motor Laminations, Transformer Cores And Compressor Motors', th:'เหล็กซิลิคอน: แกนมอเตอร์ แกนหม้อแปลง และมอเตอร์คอมเพรสเซอร์', vi:'Thep silicon: la dong co, loi may bien ap va dong co may nen' },
    sil_desc: { zh:'无取向和取向矽钢片具有低铁损、高磁感和稳定涂层，是电机、变压器、压缩机和家电马达的核心材料。', en:'Non-oriented and grain-oriented silicon steel offers low core loss, high flux density and stable coatings for motors and transformers.', th:'เหล็กซิลิคอนมีการสูญเสียต่ำ ความหนาแน่นแม่เหล็กสูง และเคลือบเสถียร สำหรับมอเตอร์และหม้อแปลง', vi:'Thep silicon vo huong va dinh huong co ton hao thap, cam ung tu cao va lop phu on dinh cho dong co va may bien ap.' },
    sil_r1: { zh:'硅元素降低磁滞损耗和涡流损耗，提升电机能效和温升表现。', en:'Silicon reduces hysteresis and eddy-current loss for better efficiency.', th:'ซิลิคอนลดการสูญเสียแม่เหล็กและกระแสวน เพิ่มประสิทธิภาพ', vi:'Silic giam ton hao tu tre va dong xoay, tang hieu suat.' },
    sil_r2: { zh:'薄规格材料适合高速冲片和叠片，能保证铁芯尺寸一致性。', en:'Thin gauges support high-speed stamping and consistent laminations.', th:'ความหนาบางเหมาะกับการปั๊มเร็วและการซ้อนแผ่นสม่ำเสมอ', vi:'Do day mong ho tro dap toc do cao va xep la dong nhat.' },
    sil_r3: { zh:'表面绝缘涂层有助于减少片间电流损耗，提升长期稳定性。', en:'Insulation coatings reduce inter-laminar current loss.', th:'ชั้นเคลือบฉนวนลดการสูญเสียระหว่างแผ่น', vi:'Lop phu cach dien giam ton hao dong giua cac la.' },
    ss_title: { zh:'不锈钢：连接件、弹片、家电面板与医疗零件', en:'Stainless Steel: Connectors, Springs, Appliance Panels And Medical Parts', th:'สแตนเลส: คอนเนกเตอร์ สปริง แผงเครื่องใช้ไฟฟ้า และชิ้นส่วนแพทย์', vi:'Thep khong gi: dau noi, la dan hoi, mat thiet bi va linh kien y te' },
    ss_desc: { zh:'SUS301、SUS304、SUS316、SUS430 等材料兼具耐腐蚀、强度、成形性和表面美观度，适合电子连接件、家电面板、汽车排气系统、医疗器械和精密弹片。', en:'SUS301, SUS304, SUS316 and SUS430 combine corrosion resistance, strength, formability and surface quality for connectors, panels, exhaust systems and springs.', th:'SUS301, SUS304, SUS316 และ SUS430 มีความทนกัดกร่อน แข็งแรง ขึ้นรูปดี และผิวสวย เหมาะกับคอนเนกเตอร์ แผงเครื่องใช้ ท่อไอเสีย และสปริง', vi:'SUS301, SUS304, SUS316 va SUS430 chong an mon, ben, de tao hinh va be mat dep cho dau noi, mat thiet bi, ong xa va la dan hoi.' },
    ss_r1: { zh:'铬镍体系形成稳定钝化膜，适合潮湿、食品、医疗和化学环境。', en:'Cr-Ni alloys form a stable passive film for humid, food, medical and chemical environments.', th:'โลหะ Cr-Ni สร้างฟิล์มป้องกัน เหมาะกับสภาพชื้น อาหาร แพทย์ และเคมี', vi:'He Cr-Ni tao mang thu dong on dinh cho moi truong am, thuc pham, y te va hoa chat.' },
    ss_r2: { zh:'301、631 等牌号可通过加工硬化获得弹性和强度，适合弹片与连接器。', en:'Grades such as 301 and 631 gain spring properties through work hardening.', th:'เกรด 301 และ 631 เพิ่มความยืดหยุ่นด้วยการรีดแข็ง เหมาะกับสปริงและคอนเนกเตอร์', vi:'Mac 301 va 631 tang dan hoi nho bien cung, phu hop la dan hoi va dau noi.' },
    ss_r3: { zh:'表面质量稳定，适合对外观、清洁度和耐久性要求高的终端产品。', en:'Stable surface quality suits products requiring appearance and durability.', th:'คุณภาพผิวเสถียร เหมาะกับสินค้าที่ต้องการรูปลักษณ์และความทนทาน', vi:'Chat luong be mat on dinh cho san pham can tham my va do ben.' },
    cu_title: { zh:'铜材：端子、连接器、导电片与热交换零件', en:'Copper: Terminals, Connectors, Conductive Strips And Heat-Exchange Parts', th:'ทองแดง: เทอร์มินัล คอนเนกเตอร์ แถบนำไฟฟ้า และชิ้นส่วนแลกเปลี่ยนความร้อน', vi:'Dong: dau cos, dau noi, bang dan dien va linh kien trao doi nhiet' },
    cu_desc: { zh:'黄铜、磷铜、白铜和铜合金带材具有优异导电性、导热性、弹性和可冲压性，广泛用于电子端子、连接器、开关弹片、屏蔽件和热交换部件。', en:'Brass, phosphor bronze, cupronickel and copper alloy strip offer conductivity, thermal transfer, elasticity and stampability for terminals, connectors and shields.', th:'ทองเหลือง ฟอสเฟอร์บรอนซ์ และโลหะผสมทองแดงนำไฟฟ้า นำความร้อน ยืดหยุ่น และปั๊มได้ดี สำหรับเทอร์มินัล คอนเนกเตอร์ และชิลด์', vi:'Dong thau, dong photpho, dong-niken va hop kim dong dan dien, dan nhiet, dan hoi va dap tot cho dau cos, dau noi va tam chan.' },
    cu_r1: { zh:'高导电率可降低接触电阻，适合电流传输和信号连接零件。', en:'High conductivity lowers contact resistance in current and signal parts.', th:'การนำไฟฟ้าสูงช่วยลดความต้านทานสัมผัส', vi:'Do dan dien cao giam dien tro tiep xuc.' },
    cu_r2: { zh:'磷铜兼具弹性和耐疲劳性，适合反复插拔的连接器弹片。', en:'Phosphor bronze combines elasticity and fatigue resistance for repeated insertion.', th:'ฟอสเฟอร์บรอนซ์มีความยืดหยุ่นและทนล้า เหมาะกับการเสียบถอดซ้ำ', vi:'Dong photpho vua dan hoi vua chong moi, phu hop dau noi cam rut nhieu lan.' },
    cu_r3: { zh:'良好的导热性使铜材适合散热、热交换和电源系统部件。', en:'Thermal conductivity makes copper suitable for heat exchange and power systems.', th:'การนำความร้อนดีเหมาะกับระบายความร้อนและระบบไฟฟ้า', vi:'Dan nhiet tot phu hop tan nhiet, trao doi nhiet va he thong nguon.' },
    scenario_kicker: { zh:'Application Scenarios', en:'Application Scenarios', th:'สถานการณ์ใช้งาน', vi:'Tinh huong ung dung' },
    scenario_title: { zh:'汽车与电子行业重点零件', en:'Key Parts In Automotive And Electronics', th:'ชิ้นส่วนสำคัญในยานยนต์และอิเล็กทรอนิกส์', vi:'Linh kien chinh trong o to va dien tu' },
    scenario_desc: { zh:'客户选材时最关心的是零件失效风险、加工效率、批量一致性和成本。KSC 从材料牌号、规格、加工方式和交付节奏上协同支持。', en:'Material selection focuses on failure risk, processing efficiency, batch consistency and cost. KSC supports grade, specification, processing and delivery planning.', th:'การเลือกวัสดุเน้นความเสี่ยงเสียหาย ประสิทธิภาพการผลิต ความสม่ำเสมอ และต้นทุน KSC ช่วยด้านเกรด สเปก การแปรรูป และส่งมอบ', vi:'Chon vat lieu tap trung vao rui ro hong, hieu qua gia cong, do dong nhat va chi phi. KSC ho tro mac, quy cach, gia cong va giao hang.' },
    auto_title: { zh:'汽车零件', en:'Automotive Parts', th:'ชิ้นส่วนยานยนต์', vi:'Linh kien o to' },
    auto_desc: { zh:'齿轮、弹簧、离合器片、座椅结构件、电池包结构、散热件和排气系统，需要材料同时满足强度、疲劳寿命、耐热、耐腐蚀和轻量化要求。', en:'Gears, springs, clutch plates, seat structures, battery packs, heat sinks and exhaust systems require strength, fatigue life, heat resistance, corrosion resistance and lightweight design.', th:'เฟือง สปริง คลัตช์ โครงเบาะ แบตเตอรี่ ระบบระบายความร้อน และท่อไอเสีย ต้องการความแข็งแรง อายุล้า ทนร้อน ทนกัดกร่อน และน้ำหนักเบา', vi:'Banh rang, lo xo, ly hop, khung ghe, goi pin, tan nhiet va ong xa can do ben, tuoi tho moi, chiu nhiet, chong an mon va nhe.' },
    electronics_title: { zh:'电子产品零件', en:'Electronic Product Parts', th:'ชิ้นส่วนอิเล็กทรอนิกส์', vi:'Linh kien dien tu' },
    electronics_desc: { zh:'连接器、端子、屏蔽罩、弹片、手机/电脑外壳、散热片和电源模块，重点关注导电、导热、弹性、表面处理和精密冲压稳定性。', en:'Connectors, terminals, shields, springs, device housings, heat sinks and power modules require conductivity, thermal performance, elasticity and stable stamping.', th:'คอนเนกเตอร์ เทอร์มินัล ชิลด์ สปริง เคสอุปกรณ์ ฮีตซิงก์ และโมดูลไฟฟ้า ต้องการการนำไฟฟ้า นำความร้อน ความยืดหยุ่น และการปั๊มเสถียร', vi:'Dau noi, dau cos, tam chan, la dan hoi, vo thiet bi, tan nhiet va module nguon can dan dien, dan nhiet, dan hoi va dap on dinh.' },
    motor_title: { zh:'电机与电气零件', en:'Motor And Electrical Parts', th:'ชิ้นส่วนมอเตอร์และไฟฟ้า', vi:'Linh kien dong co va dien' },
    motor_desc: { zh:'电机定转子、变压器铁芯、压缩机马达和发电机部件，核心指标是低铁损、高磁感、涂层绝缘性和冲片后的叠片一致性。', en:'Motor laminations, transformer cores, compressor motors and generator parts depend on low core loss, high flux density, coating insulation and lamination consistency.', th:'แกนมอเตอร์ แกนหม้อแปลง มอเตอร์คอมเพรสเซอร์ และชิ้นส่วนเครื่องกำเนิดไฟฟ้า ต้องการการสูญเสียต่ำ แม่เหล็กสูง ฉนวนเคลือบ และความสม่ำเสมอ', vi:'La dong co, loi may bien ap, dong co may nen va may phat can ton hao thap, cam ung cao, lop phu cach dien va xep la dong nhat.' },
    partner_kicker: { zh:'Supply Chain Cooperation', en:'Supply Chain Cooperation', th:'ความร่วมมือซัพพลายเชน', vi:'Hop tac chuoi cung ung' },
    partner_title: { zh:'国内钢厂、铝厂、不锈钢工厂合作网络', en:'Domestic Steel, Aluminum And Stainless Mill Network', th:'เครือข่ายโรงงานเหล็ก อะลูมิเนียม และสแตนเลสในจีน', vi:'Mang luoi nha may thep, nhom va inox noi dia' },
    partner_desc: { zh:'通过与国内主流材料工厂保持长期沟通和供应协作，KSC 能在牌号、规格、交期和质量稳定性上为客户提供更确定的采购体验。', en:'Long-term communication with major domestic mills helps KSC support grade, specification, lead time and stable quality requirements.', th:'การประสานงานระยะยาวกับโรงงานวัสดุหลัก ช่วยให้ KSC สนับสนุนเกรด สเปก ระยะเวลา และคุณภาพที่เสถียร', vi:'Lien lac dai han voi cac nha may lon giup KSC ho tro mac, quy cach, tien do va chat luong on dinh.' },
    partner_note: { zh:'注：图中为供应链沟通中常见的合作资源名称展示，用于说明材料来源网络，不代表官方商标授权图形。', en:'Note: names are shown as supply-chain references to explain sourcing channels and are not official trademark artwork.', th:'หมายเหตุ: รายชื่อใช้เป็นข้อมูลอ้างอิงซัพพลายเชน ไม่ใช่งานโลโก้อย่างเป็นทางการ', vi:'Ghi chu: ten duoc dung nhu tham chieu chuoi cung ung, khong phai tac pham logo chinh thuc.' },
    cta_title: { zh:'有零件图纸或材料替代需求？', en:'Have Part Drawings Or Material Substitution Needs?', th:'มีแบบชิ้นส่วนหรือต้องการเปลี่ยนวัสดุ?', vi:'Co ban ve linh kien hoac can thay the vat lieu?' },
    cta_desc: { zh:'把零件用途、厚度、硬度、表面要求和年用量发给我们，KSC 可以协助推荐材料牌号和加工方案。', en:'Send the part use, thickness, hardness, surface requirements and annual volume. KSC can recommend grades and processing plans.', th:'ส่งการใช้งาน ความหนา ความแข็ง ผิว และปริมาณต่อปีให้เรา KSC ช่วยแนะนำเกรดและการแปรรูปได้', vi:'Gui cong dung, do day, do cung, yeu cau be mat va san luong nam, KSC se goi y mac va phuong an gia cong.' },
    cta_btn: { zh:'发送零件需求', en:'Send Part Requirement', th:'ส่งความต้องการชิ้นส่วน', vi:'Gui yeu cau linh kien' }
  },
  processingPage: {
    kicker: { zh:'Processing Capability', en:'Processing Capability', th:'ความสามารถการแปรรูป', vi:'Nang luc gia cong' },
    title: { zh:'加工能力', en:'Processing Capability', th:'ความสามารถการแปรรูป', vi:'Nang luc gia cong' },
    subtitle: { zh:'从原卷到可直接上机生产的材料尺寸，KSC 提供分条、剪板、冷轧、退火和包装协同。', en:'From master coils to production-ready sizes, KSC supports slitting, shearing, cold rolling, annealing and packaging.', th:'จากม้วนใหญ่สู่ขนาดพร้อมผลิต KSC รองรับการตัดแถบ ตัดแผ่น รีดเย็น อบอ่อน และบรรจุ', vi:'Tu cuon me den kich thuoc san xuat, KSC ho tro xe bang, cat tam, can lanh, u va dong goi.' },
    cap_kicker: { zh:'Core Processes', en:'Core Processes', th:'กระบวนการหลัก', vi:'Quy trinh cot loi' },
    cap_title: { zh:'核心加工工艺', en:'Core Processing Services', th:'บริการแปรรูปหลัก', vi:'Dich vu gia cong cot loi' },
    cap_desc: { zh:'围绕客户冲压、切削、叠片和装配需求，稳定控制尺寸、公差、边部质量和材料状态。', en:'For stamping, cutting, laminating and assembly, KSC controls size, tolerance, edge quality and material condition.', th:'สำหรับงานปั๊ม ตัด ซ้อนแผ่น และประกอบ KSC ควบคุมขนาด พิกัด ขอบ และสภาพวัสดุ', vi:'Cho dap, cat, xep la va lap rap, KSC kiem soat kich thuoc, dung sai, mep va trang thai vat lieu.' },
    slit_title: { zh:'分条 / 纵剪', en:'Slitting', th:'ตัดแถบ', vi:'Xe bang' },
    slit_desc: { zh:'将宽幅卷材分切成客户生产线所需宽度，重点控制毛刺、镰刀弯、卷重和边部一致性。', en:'Cut master coils into required widths while controlling burr, camber, coil weight and edge consistency.', th:'ตัดม้วนกว้างเป็นความกว้างที่ต้องการ พร้อมควบคุมครีบ ความโค้ง น้ำหนักม้วน และขอบ', vi:'Xe cuon rong thanh kich thuoc can thiet, kiem soat ba via, do cong, trong luong cuon va mep.' },
    shear_title: { zh:'剪板 / 横切', en:'Shearing / Cut-To-Length', th:'ตัดแผ่น', vi:'Cat tam / cat ngang' },
    shear_desc: { zh:'按长度、宽度和表面保护要求加工板料，适合冲压、激光切割、折弯和精密五金备料。', en:'Prepare sheet material by length, width and surface protection for stamping, laser cutting, bending and hardware parts.', th:'ตัดแผ่นตามยาว กว้าง และการป้องกันผิว สำหรับปั๊ม เลเซอร์ พับ และชิ้นส่วนฮาร์ดแวร์', vi:'Cat tam theo dai, rong va bao ve be mat cho dap, laser, chan va linh kien kim khi.' },
    roll_title: { zh:'冷轧 / 压延', en:'Cold Rolling', th:'รีดเย็น', vi:'Can lanh' },
    roll_desc: { zh:'通过厚度压下和板形控制，满足更薄规格、更高尺寸精度或特殊硬度状态需求。', en:'Reduce thickness and control flatness for thinner gauges, tighter accuracy and specific hardness requirements.', th:'ลดความหนาและควบคุมความเรียบ เพื่อสเปกบางขึ้น ความแม่นยำสูงขึ้น และความแข็งเฉพาะ', vi:'Giam do day va kiem soat do phang cho quy cach mong, chinh xac va do cung rieng.' },
    anneal_title: { zh:'退火 / 球化退火', en:'Annealing', th:'อบอ่อน', vi:'U' },
    anneal_desc: { zh:'改善材料塑性、硬度和组织状态，帮助客户提升冲压、成形和后续热处理稳定性。', en:'Improve ductility, hardness and microstructure for stable stamping, forming and downstream heat treatment.', th:'ปรับความเหนียว ความแข็ง และโครงสร้าง เพื่อการปั๊ม ขึ้นรูป และความร้อนต่อเนื่องที่เสถียร', vi:'Cai thien do deo, do cung va to chuc cho dap, tao hinh va nhiet luyen on dinh.' },
    table_kicker: { zh:'Equipment Range', en:'Equipment Range', th:'ขอบเขตเครื่องจักร', vi:'Pham vi thiet bi' },
    table_title: { zh:'设备范围与加工参数', en:'Equipment Range And Processing Parameters', th:'ขอบเขตเครื่องจักรและพารามิเตอร์', vi:'Pham vi thiet bi va thong so gia cong' },
    table_desc: { zh:'参数可作为初步沟通参考，实际加工范围会结合材料牌号、硬度、表面和包装要求确认。', en:'Parameters are for initial discussion and will be confirmed by grade, hardness, surface and packaging requirements.', th:'พารามิเตอร์ใช้เพื่อสื่อสารเบื้องต้น และจะยืนยันตามเกรด ความแข็ง ผิว และบรรจุภัณฑ์', vi:'Thong so de tham khao ban dau va se xac nhan theo mac, do cung, be mat va dong goi.' },
    cta_title: { zh:'需要确认加工范围？', en:'Need To Confirm Processing Range?', th:'ต้องการยืนยันขอบเขตการแปรรูป?', vi:'Can xac nhan pham vi gia cong?' },
    cta_desc: { zh:'提供材料牌号、厚度、宽度、目标尺寸、公差、卷重和包装要求，我们可以协助判断可加工方案。', en:'Send grade, thickness, width, target size, tolerance, coil weight and packaging needs for feasibility review.', th:'ส่งเกรด ความหนา ความกว้าง ขนาดเป้าหมาย พิกัด น้ำหนักม้วน และบรรจุภัณฑ์ เพื่อประเมินการแปรรูป', vi:'Gui mac, do day, rong, kich thuoc muc tieu, dung sai, trong luong cuon va dong goi de xem kha thi.' },
    cta_btn: { zh:'发送加工需求', en:'Send Processing Request', th:'ส่งความต้องการแปรรูป', vi:'Gui yeu cau gia cong' }
  },
  qualityPage: {
    kicker: { zh:'Quality & Delivery', en:'Quality & Delivery', th:'คุณภาพและส่งมอบ', vi:'Chat luong va giao hang' },
    title: { zh:'质量与交付', en:'Quality & Delivery', th:'คุณภาพและการส่งมอบ', vi:'Chat luong va giao hang' },
    subtitle: { zh:'面向汽车、电子和精密制造客户，KSC 注重材料一致性、尺寸稳定性、包装保护和批次追溯。', en:'For automotive, electronics and precision manufacturing clients, KSC focuses on consistency, dimensional stability, packaging and traceability.', th:'สำหรับลูกค้ายานยนต์ อิเล็กทรอนิกส์ และการผลิตแม่นยำ KSC เน้นความสม่ำเสมอ ขนาด บรรจุ และการตรวจสอบย้อนกลับ', vi:'Cho khach hang o to, dien tu va chinh xac, KSC tap trung dong nhat, on dinh kich thuoc, dong goi va truy xuat.' },
    system_kicker: { zh:'Quality System', en:'Quality System', th:'ระบบคุณภาพ', vi:'He thong chat luong' },
    system_title: { zh:'从材料到交付的质量控制', en:'Quality Control From Material To Delivery', th:'ควบคุมคุณภาพตั้งแต่วัสดุถึงส่งมอบ', vi:'Kiem soat chat luong tu vat lieu den giao hang' },
    system_desc: { zh:'重点关注客户最容易产生风险的环节：牌号、硬度、尺寸、表面、边部、包装和标签。', en:'Focus on common risk points: grade, hardness, size, surface, edge, packaging and labels.', th:'เน้นจุดเสี่ยงหลัก: เกรด ความแข็ง ขนาด ผิว ขอบ บรรจุ และฉลาก', vi:'Tap trung diem rui ro: mac, do cung, kich thuoc, be mat, mep, dong goi va nhan.' },
    q1_title: { zh:'来料与牌号确认', en:'Incoming Material Check', th:'ตรวจรับวัสดุและเกรด', vi:'Kiem tra vat lieu dau vao' },
    q1_desc: { zh:'核对材料牌号、炉批、状态、规格和客户图纸要求，减少替代错误。', en:'Check grade, heat lot, condition, specification and drawing requirements to reduce substitution errors.', th:'ตรวจเกรด ล็อต สภาพ สเปก และแบบลูกค้า เพื่อลดความผิดพลาด', vi:'Kiem tra mac, lo, trang thai, quy cach va ban ve de giam loi thay the.' },
    q2_title: { zh:'尺寸与边部检查', en:'Dimension And Edge Check', th:'ตรวจขนาดและขอบ', vi:'Kiem tra kich thuoc va mep' },
    q2_desc: { zh:'关注厚度、宽度、长度、公差、毛刺和板形，支持后续冲压与装配。', en:'Control thickness, width, length, tolerance, burr and flatness for stamping and assembly.', th:'ควบคุมความหนา กว้าง ยาว พิกัด ครีบ และความเรียบ เพื่อปั๊มและประกอบ', vi:'Kiem soat do day, rong, dai, dung sai, ba via va do phang cho dap va lap rap.' },
    q3_title: { zh:'表面与包装保护', en:'Surface And Packaging Protection', th:'ป้องกันผิวและบรรจุภัณฑ์', vi:'Bao ve be mat va dong goi' },
    q3_desc: { zh:'根据材料和运输距离确认防锈、防潮、覆膜、托盘和标签方式。', en:'Confirm rust prevention, moisture protection, film, pallet and labels by material and route.', th:'ยืนยันกันสนิม กันชื้น ฟิล์ม พาเลท และฉลากตามวัสดุและเส้นทาง', vi:'Xac nhan chong gi, chong am, phu phim, pallet va nhan theo vat lieu va tuyen.' },
    q4_title: { zh:'批次追溯与文件', en:'Traceability And Documents', th:'ย้อนกลับล็อตและเอกสาร', vi:'Truy xuat va tai lieu' },
    q4_desc: { zh:'按客户需要保留批次、规格、加工记录和出货信息，方便后续追踪。', en:'Keep batch, specification, processing and shipment records when required.', th:'เก็บล็อต สเปก บันทึกการแปรรูป และข้อมูลจัดส่งตามความต้องการ', vi:'Luu lo, quy cach, gia cong va thong tin xuat hang khi can.' },
    cert_title: { zh:'面向制造客户的体系化服务', en:'Systematic Service For Manufacturing Clients', th:'บริการเป็นระบบสำหรับลูกค้าผลิต', vi:'Dich vu he thong cho khach hang san xuat' },
    cert_desc: { zh:'对汽车、电子、精密五金客户而言，材料供应不只是价格，还包括稳定供货、质量一致性、包装规范和快速响应。', en:'For automotive, electronics and precision hardware clients, supply is not only price but also stable delivery, consistency, packaging and response.', th:'สำหรับยานยนต์ อิเล็กทรอนิกส์ และฮาร์ดแวร์แม่นยำ การจัดหาไม่ใช่แค่ราคา แต่รวมถึงส่งมอบ คุณภาพ บรรจุ และตอบสนอง', vi:'Voi o to, dien tu va kim khi chinh xac, cung ung khong chi la gia ma con giao hang, dong nhat, dong goi va phan hoi.' },
    delivery_kicker: { zh:'Delivery Assurance', en:'Delivery Assurance', th:'ความมั่นใจส่งมอบ', vi:'Dam bao giao hang' },
    delivery_title: { zh:'跨区域交付支持', en:'Cross-Regional Delivery Support', th:'สนับสนุนส่งมอบข้ามภูมิภาค', vi:'Ho tro giao hang lien vung' },
    delivery_desc: { zh:'东莞、苏州、新余、越南、泰国基地协同，为中国及东南亚客户提供更灵活的交付安排。', en:'Dongguan, Suzhou, Xinyu, Vietnam and Thailand bases coordinate flexible delivery for China and Southeast Asia.', th:'ฐานตงก่วน ซูโจว ซินหยู เวียดนาม และไทยประสานงานเพื่อส่งมอบยืดหยุ่นในจีนและอาเซียน', vi:'Dongguan, Suzhou, Xinyu, Viet Nam va Thai Lan phoi hop giao hang linh hoat cho Trung Quoc va Dong Nam A.' },
    cta_title: { zh:'有质量或包装要求？', en:'Have Quality Or Packaging Requirements?', th:'มีข้อกำหนดคุณภาพหรือบรรจุ?', vi:'Co yeu cau chat luong hoac dong goi?' },
    cta_desc: { zh:'把图纸、公差、包装规范、标签要求和出货地区发给我们，KSC 可以协助确认可执行方案。', en:'Send drawings, tolerances, packaging specs, label requirements and shipping region for review.', th:'ส่งแบบ พิกัด บรรจุ ฉลาก และพื้นที่ส่งมอบเพื่อให้ KSC ตรวจสอบ', vi:'Gui ban ve, dung sai, quy cach dong goi, nhan va khu vuc giao hang de KSC xem xet.' },
    cta_btn: { zh:'发送质量要求', en:'Send Quality Request', th:'ส่งข้อกำหนดคุณภาพ', vi:'Gui yeu cau chat luong' }
  },
  seo: {
    home_title: {
      zh:'S45C_42CrMo4_AL6061_SUS301_矽钢片供应商_高顺昌KSC',
      en:'Special Steel, Aluminum & Silicon Steel Supplier | KSC',
      th:'ผู้จัดหาเหล็กพิเศษ อะลูมิเนียม และเหล็กซิลิคอน | KSC',
      vi:'Nha cung cap thep dac biet, nhom va thep silicon | KSC'
    },
    home_desc: {
      zh:'高顺昌KSC专业供应S45C、42CrMo4、65Mn、AL6061、AL5052、SUS301、SUS304、B20AT、50W290、C52100等特钢、铝材、不锈钢、矽钢片与铜材，支持分条、剪板、冷轧、退火加工。',
      en:'KSC supplies special steel, aluminum, silicon steel, stainless steel and copper with slitting, shearing, cold rolling and annealing across China, Vietnam and Thailand.',
      th:'KSC จัดหาเหล็กพิเศษ อะลูมิเนียม เหล็กซิลิคอน สแตนเลส และทองแดง พร้อมบริการตัด รีดเย็น และอบอ่อนในจีน เวียดนาม และไทย',
      vi:'KSC cung cap thep dac biet, nhom, thep silicon, thep khong gi va dong, cung dich vu xe bang, cat tam, can lanh va u tai Trung Quoc, Viet Nam va Thai Lan.'
    },
    about_title: {
      zh:'关于高顺昌KSC | 25年金属材料供应与加工经验',
      en:'About KSC | 25+ Years in Metal Materials',
      th:'เกี่ยวกับ KSC | ประสบการณ์วัสดุโลหะกว่า 25 ปี',
      vi:'Ve KSC | Hon 25 nam vat lieu kim loai'
    },
    about_desc: {
      zh:'了解高顺昌KSC的发展历程、生产网络、客户基础和金属材料加工能力，服务汽车、电子、精密五金与工业制造客户。',
      en:'Learn about KSC history, manufacturing network, customer base and metal processing capabilities for automotive, electronics, precision hardware and industrial clients.',
      th:'ข้อมูลประวัติ เครือข่ายโรงงาน ลูกค้า และความสามารถการแปรรูปโลหะของ KSC สำหรับยานยนต์ อิเล็กทรอนิกส์ และอุตสาหกรรม',
      vi:'Tim hieu lich su KSC, mang luoi nha may, khach hang va nang luc gia cong kim loai cho o to, dien tu, kim khi chinh xac va cong nghiep.'
    },
    products_title: {
      zh:'S45C_42CrMo4_65Mn_AL6061_SUS301_B20AT_产品中心_KSC',
      en:'Products | Special Steel, 6061 Aluminum, Silicon Steel | KSC',
      th:'ผลิตภัณฑ์ | เหล็กพิเศษ อะลูมิเนียม 6061 เหล็กซิลิคอน | KSC',
      vi:'San pham | Thep dac biet, nhom 6061, thep silicon | KSC'
    },
    products_desc: {
      zh:'高顺昌KSC产品中心覆盖S35C、S45C、SK85、42CrMo4、16MnCr5、AL6061、AL7075、SUS301、SUS304、SUS316、B20AT、50W290、C52100等型号，支持来图定制切割加工与稳定批量供应。',
      en:'KSC products include special steel, aluminum alloy, silicon steel, stainless steel, hot/cold rolled coils and copper, with custom cutting and stable bulk supply.',
      th:'ผลิตภัณฑ์ KSC ครอบคลุมเหล็กพิเศษ อะลูมิเนียม เหล็กซิลิคอน สแตนเลส เหล็กม้วน และทองแดง พร้อมบริการตัดตามแบบ',
      vi:'San pham KSC gom thep dac biet, hop kim nhom, thep silicon, thep khong gi, cuon can nong/can nguoi va dong, ho tro cat theo ban ve.'
    },
    applications_title: {
      zh:'S45C_AL6061_SUS301_B20AT材料应用案例_高顺昌KSC',
      en:'Material Applications & Part Cases | Automotive & Electronics | KSC',
      th:'การใช้งานวัสดุและชิ้นส่วน | ยานยนต์และอิเล็กทรอนิกส์ | KSC',
      vi:'Ung dung vat lieu va linh kien | O to va dien tu | KSC'
    },
    applications_desc: {
      zh:'高顺昌KSC展示S45C、42CrMo4、AL6061、AL5052、SUS301、SUS304、B20AT、50W290等材料在汽车零件、电子零件、电机铁芯和精密五金中的应用与选材原因。',
      en:'KSC explains how special steel, silicon steel, aluminum, stainless steel and copper are used in automotive, electronics, motor cores and precision parts.',
      th:'KSC อธิบายการใช้เหล็กพิเศษ เหล็กซิลิคอน อะลูมิเนียม สแตนเลส และทองแดงในยานยนต์ อิเล็กทรอนิกส์ และชิ้นส่วนแม่นยำ',
      vi:'KSC giai thich ung dung thep dac biet, thep silicon, nhom, inox va dong trong o to, dien tu, loi dong co va linh kien chinh xac.'
    },
    processing_title: {
      zh:'加工能力 | 分条剪板冷轧退火 | 高顺昌KSC',
      en:'Processing Capability | Slitting, Shearing, Cold Rolling | KSC',
      th:'ความสามารถการแปรรูป | ตัดแถบ ตัดแผ่น รีดเย็น | KSC',
      vi:'Nang luc gia cong | Xe bang, cat tam, can lanh | KSC'
    },
    processing_desc: {
      zh:'高顺昌KSC提供分条、剪板、冷轧、退火和包装交付服务，支持特钢、矽钢片、铝材、不锈钢、铜材加工需求。',
      en:'KSC provides slitting, shearing, cold rolling, annealing, packaging and delivery for special steel, silicon steel, aluminum, stainless steel and copper.',
      th:'KSC ให้บริการตัดแถบ ตัดแผ่น รีดเย็น อบอ่อน บรรจุ และส่งมอบสำหรับเหล็กพิเศษ เหล็กซิลิคอน อะลูมิเนียม สแตนเลส และทองแดง',
      vi:'KSC cung cap xe bang, cat tam, can lanh, u, dong goi va giao hang cho thep dac biet, thep silicon, nhom, inox va dong.'
    },
    quality_title: {
      zh:'质量与交付 | 检验包装追溯 | 高顺昌KSC',
      en:'Quality & Delivery | Inspection, Packaging, Traceability | KSC',
      th:'คุณภาพและส่งมอบ | ตรวจสอบ บรรจุ ย้อนกลับ | KSC',
      vi:'Chat luong va giao hang | Kiem tra, dong goi, truy xuat | KSC'
    },
    quality_desc: {
      zh:'高顺昌KSC质量与交付能力覆盖来料确认、尺寸检验、表面检验、包装标识、批次追溯和跨区域交付。',
      en:'KSC quality and delivery covers incoming checks, dimension inspection, surface inspection, packaging, labels, traceability and regional delivery.',
      th:'คุณภาพและส่งมอบของ KSC ครอบคลุมตรวจรับ ตรวจขนาด ตรวจผิว บรรจุ ฉลาก ย้อนกลับ และส่งมอบข้ามภูมิภาค',
      vi:'Chat luong va giao hang KSC gom kiem tra dau vao, kich thuoc, be mat, dong goi, nhan, truy xuat va giao hang khu vuc.'
    },
    factory_title: {
      zh:'中国越南泰国生产基地 | 金属材料分条剪板加工 | KSC',
      en:'Factories in China, Vietnam & Thailand | Metal Processing | KSC',
      th:'โรงงานในจีน เวียดนาม และไทย | แปรรูปวัสดุโลหะ | KSC',
      vi:'Nha may tai Trung Quoc, Viet Nam va Thai Lan | Gia cong kim loai | KSC'
    },
    factory_desc: {
      zh:'高顺昌KSC在东莞、苏州、新余、越南海防、泰国春武里设有生产基地，提供分条、剪板、冷轧、退火等加工服务。',
      en:'KSC operates production bases in Dongguan, Suzhou, Xinyu, Haiphong and Chon Buri, offering slitting, shearing, cold rolling and annealing.',
      th:'KSC มีฐานการผลิตที่ตงก่วน ซูโจว ซินหยู ไฮฟอง และชลบุรี ให้บริการตัดแถบ ตัดแผ่น รีดเย็น และอบอ่อน',
      vi:'KSC co co so san xuat tai Dongguan, Suzhou, Xinyu, Hai Phong va Chon Buri, cung cap xe bang, cat tam, can lanh va u.'
    },
    contact_title: {
      zh:'联系我们 | 特钢铝材不锈钢询价 | 高顺昌KSC',
      en:'Contact KSC | Steel, Aluminum & Stainless Steel Inquiry',
      th:'ติดต่อ KSC | สอบถามเหล็ก อะลูมิเนียม และสแตนเลส',
      vi:'Lien he KSC | Bao gia thep, nhom va thep khong gi'
    },
    contact_desc: {
      zh:'联系高顺昌KSC销售代表，咨询特钢、矽钢片、铝材、不锈钢、铜材及分条剪板加工服务，支持中国、越南、泰国客户。',
      en:'Contact KSC for special steel, silicon steel, aluminum, stainless steel, copper and processing service inquiries across China, Vietnam and Thailand.',
      th:'ติดต่อ KSC เพื่อสอบถามเหล็กพิเศษ เหล็กซิลิคอน อะลูมิเนียม สแตนเลส ทองแดง และบริการแปรรูปในจีน เวียดนาม และไทย',
      vi:'Lien he KSC de hoi ve thep dac biet, thep silicon, nhom, thep khong gi, dong va dich vu gia cong tai Trung Quoc, Viet Nam va Thai Lan.'
    },
    materials_title: {
      zh:'S45C_20CrMnTiH_AL6061_SUS304_B20AT_材料及应用_KSC',
      en:'Materials & Applications | Steel, Aluminum, Stainless, Silicon Steel | KSC',
      th:'วัสดุและการใช้งาน | เหล็ก อะลูมิเนียม สแตนเลส เหล็กซิลิคอน | KSC',
      vi:'Vat lieu va ung dung | Thep, nhom, inox, thep silicon | KSC'
    },
    materials_desc: {
      zh:'KSC材料及应用页覆盖S45C、42CrMo4、20CrMnTiH、AL6061-T6、AL5052、SUS301、SUS304、B20AT、50W290、C52100等常用产品型号，适用于汽车冲压件、新能源电驱、电子散热与精密零件。',
      en:'KSC materials page covers common grades for automotive, electronics, motor and precision parts applications.',
      th:'หน้าวัสดุของ KSC ครอบคลุมเกรดยอดนิยมสำหรับยานยนต์ อิเล็กทรอนิกส์ มอเตอร์ และชิ้นส่วนแม่นยำ',
      vi:'Trang vat lieu KSC bao gom cac mac pho bien cho o to, dien tu, dong co va linh kien chinh xac.'
    }
  },
  processTable: {
    h_machine: { zh:'设备', en:'Machine', th:'เครื่องจักร', vi:'May moc' },
    h_qty: { zh:'数量', en:'Qty', th:'จำนวน', vi:'So luong' },
    h_thickness: { zh:'厚度', en:'Thickness', th:'ความหนา', vi:'Do day' },
    h_width: { zh:'宽度', en:'Width', th:'ความกว้าง', vi:'Chieu rong' },
    h_size: { zh:'成品尺寸', en:'Size', th:'ขนาดสำเร็จรูป', vi:'Kich thuoc thanh pham' }
  }
};

let currentLang = 'zh';
const prefersReducedMotion = window.matchMedia
  ? window.matchMedia('(prefers-reduced-motion: reduce)')
  : { matches: false };
const AUTO_REVEAL_SELECTORS = [
  '.page-header-content',
  '.section-title',
  '.info-panel',
  '.metric-chip',
  '.cert-badge',
  '.customer-frame',
  '.table-shell',
  '.materials-table-wrap',
  '.factory-card',
  '.contact-item',
  '.contact-form',
  '.wechat-section',
  '.selector-card',
  '.process-pills',
  '.quote-step',
  '.capability-card',
  '.quality-card',
  '.application-card',
  '.scenario-panel',
  '.partner-board',
  '.mini-card',
];

const SITE_URL = 'https://ksc-steel.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/cover.jpeg`;
const PAGE_PATHS = {
  home: '/',
  about: '/about.html',
  products: '/products.html',
  applications: '/applications.html',
  processing: '/processing.html',
  quality: '/quality.html',
  factory: '/factory.html',
  contact: '/contact.html',
  materials: '/materials.html',
};

const LANG_CONFIG = {
  zh: { flag: '🇨🇳', label: '中文' },
  en: { flag: '🇬🇧', label: 'English' },
  th: { flag: '🇹🇭', label: 'ภาษาไทย' },
  vi: { flag: '🇻🇳', label: 'Tiếng Việt' },
};

function T(section, key) {
  const sectionAlias = {
    prod: 'products',
    fac: 'factory',
  };
  const resolvedSection = sectionAlias[section] || section;
  const v = L[resolvedSection]?.[key];
  if (!v) return key;
  return v[currentLang] || v['en'] || key;
}

function getCurrentPage() {
  const explicit = document.body?.dataset.page;
  if (explicit) return explicit;
  const pathname = window.location.pathname || '/';
  if (pathname === '/' || pathname.endsWith('/index.html')) return 'home';
  const file = pathname.split('/').pop()?.replace('.html', '') || 'home';
  return PAGE_PATHS[file] ? file : file;
}

function ensureNamedMeta(name) {
  let meta = document.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }
  return meta;
}

function ensurePropertyMeta(property) {
  let meta = document.querySelector(`meta[property="${property}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  return meta;
}

function ensureCanonical(href) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

function setStructuredData(page, title, description, pageUrl) {
  const type = page === 'products' || page === 'materials' || page === 'applications' ? 'CollectionPage' : 'WebPage';
  const payload = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}#organization`,
        name: '高顺昌控股有限公司 KSC',
        alternateName: 'Kao Shun Cheong Holdings Co., Ltd.',
        url: SITE_URL,
        logo: `${SITE_URL}/images/ksc-logo-red.jpeg`,
        email: 'mailto:hujian@kscsteel.net',
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'sales',
            email: 'hujian@kscsteel.net',
            availableLanguage: ['zh-CN', 'en', 'th', 'vi']
          }
        ]
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}#website`,
        url: SITE_URL,
        name: '高顺昌 KSC',
        publisher: { '@id': `${SITE_URL}#organization` }
      },
      {
        '@type': type,
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: title,
        description,
        isPartOf: { '@id': `${SITE_URL}#website` },
        about: { '@id': `${SITE_URL}#organization` },
        inLanguage: currentLang
      }
    ]
  };

  let script = document.getElementById('ksc-structured-data');
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'ksc-structured-data';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(payload);
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const section = el.dataset.i18n;
    const key = el.dataset.i18nKey;
    if (!section || !key) return;
    el.textContent = T(section, key);
  });

  // Placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = T(el.dataset.i18nPlaceholder, el.dataset.i18nKey);
  });

  // HTML lang
  document.documentElement.lang = currentLang;

  const page = getCurrentPage();
  const title = T('seo', `${page}_title`);
  const description = T('seo', `${page}_desc`);
  if (title && !title.endsWith('_title')) document.title = title;
  const metaDescription = ensureNamedMeta('description');
  if (description && !description.endsWith('_desc')) {
    metaDescription.setAttribute('content', description);
  }

  const pagePath = PAGE_PATHS[page] || '/';
  const pageUrl = `${SITE_URL}${pagePath}`;
  ensureCanonical(pageUrl);
  ensureNamedMeta('robots').setAttribute('content', 'index,follow');
  ensurePropertyMeta('og:type').setAttribute('content', page === 'home' ? 'website' : 'article');
  ensurePropertyMeta('og:site_name').setAttribute('content', '高顺昌 KSC');
  ensurePropertyMeta('og:title').setAttribute('content', document.title);
  ensurePropertyMeta('og:description').setAttribute('content', metaDescription.getAttribute('content') || '');
  ensurePropertyMeta('og:url').setAttribute('content', pageUrl);
  ensurePropertyMeta('og:image').setAttribute('content', DEFAULT_OG_IMAGE);
  ensureNamedMeta('twitter:card').setAttribute('content', 'summary_large_image');
  ensureNamedMeta('twitter:title').setAttribute('content', document.title);
  ensureNamedMeta('twitter:description').setAttribute('content', metaDescription.getAttribute('content') || '');
  ensureNamedMeta('twitter:image').setAttribute('content', DEFAULT_OG_IMAGE);
  setStructuredData(page, document.title, metaDescription.getAttribute('content') || '', pageUrl);

  const selectEl = document.querySelector('.lang-select');
  if (selectEl) selectEl.value = currentLang;

  localStorage.setItem('ksc_lang', currentLang);
}

function initLang() {
  const saved = localStorage.getItem('ksc_lang');
  if (saved && L.nav.home[saved]) currentLang = saved;
  else {
    const bl = navigator.language.toLowerCase();
    if (bl.startsWith('zh')) currentLang = 'zh';
    else if (bl.startsWith('th')) currentLang = 'th';
    else if (bl.startsWith('vi')) currentLang = 'vi';
    else currentLang = 'en';
  }
  applyTranslations();

  const select = document.querySelector('.lang-select');
  select?.addEventListener('change', () => {
    const nextLang = select.value;
    if (!nextLang || !L.nav.home[nextLang]) return;
    currentLang = nextLang;
    applyTranslations();
  });
}

function initNav() {
  const navbar = document.querySelector('.navbar');
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  const syncNavbar = () => {
    if (!navbar) return;
    navbar.classList.toggle('is-scrolled', window.scrollY > 16);
  };

  syncNavbar();
  window.addEventListener('scroll', syncNavbar, { passive: true });

  toggle?.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    links?.classList.toggle('show', !expanded);
    document.body.classList.toggle('nav-open', !expanded);
  });

  links?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('show');
      document.body.classList.remove('nav-open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      links?.classList.remove('show');
      document.body.classList.remove('nav-open');
      toggle?.setAttribute('aria-expanded', 'false');
    }
  });
}

function initMotionTargets() {
  AUTO_REVEAL_SELECTORS.forEach((selector) => {
    document.querySelectorAll(selector).forEach((element) => {
      if (!element.classList.contains('reveal')) {
        element.classList.add('reveal');
      }
    });
  });

  document.querySelectorAll('.page-header').forEach((header) => {
    header.classList.add('page-header-animated');
  });

  document.querySelectorAll('.metric-chip strong').forEach((item) => {
    if (item.dataset.countup) return;
    const text = (item.textContent || '').trim();
    const match = text.match(/^(\d+)(\+)?$/);
    if (!match) return;
    item.classList.add('countup');
    item.dataset.countup = match[1];
    if (match[2]) item.dataset.countupSuffix = match[2];
  });
}

function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length || !('IntersectionObserver' in window)) {
    items.forEach(item => item.classList.add('visible'));
    initCountups();
    return;
  }

  items.forEach((item) => {
    const group = item.parentElement;
    if (!group) return;
    const peers = Array.from(group.children).filter((child) => child.classList?.contains('reveal'));
    const index = peers.indexOf(item);
    if (index > -1 && !item.style.getPropertyValue('--reveal-delay')) {
      item.style.setProperty('--reveal-delay', `${Math.min(index, 6) * 70}ms`);
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      animateCountups(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.16 });

  items.forEach(item => observer.observe(item));
}

function formatCount(value, suffix = '') {
  return `${Math.round(value)}${suffix}`;
}

function animateCountups(scope = document) {
  const items = scope.querySelectorAll ? scope.querySelectorAll('.countup[data-countup]') : [];
  items.forEach((item) => {
    if (item.dataset.counted === 'true') return;

    const target = Number(item.dataset.countup);
    if (!Number.isFinite(target)) return;

    const suffix = item.dataset.countupSuffix || '';
    if (prefersReducedMotion.matches) {
      item.textContent = formatCount(target, suffix);
      item.dataset.counted = 'true';
      return;
    }

    const duration = 1200;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      item.textContent = formatCount(target * eased, suffix);
      if (progress < 1) {
        window.requestAnimationFrame(tick);
        return;
      }
      item.textContent = formatCount(target, suffix);
      item.dataset.counted = 'true';
    };

    window.requestAnimationFrame(tick);
  });
}

function initCountups() {
  animateCountups(document);
}

function initHeroMotion() {
  const hero = document.querySelector('.hero');
  if (!hero || prefersReducedMotion.matches) return;

  let ticking = false;

  const syncHeroMotion = () => {
    const rect = hero.getBoundingClientRect();
    const viewportHeight = window.innerHeight || 1;
    const progress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (rect.height + viewportHeight * 0.35)));
    const shift = Math.min(window.scrollY * 0.08, 36);
    const panelShift = Math.min(window.scrollY * 0.03, 18);

    document.documentElement.style.setProperty('--hero-progress', progress.toFixed(3));
    document.documentElement.style.setProperty('--hero-shift', `${shift.toFixed(2)}px`);
    document.documentElement.style.setProperty('--hero-panel-shift', `${panelShift.toFixed(2)}px`);
    ticking = false;
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(syncHeroMotion);
  };

  syncHeroMotion();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
}

function initPageHeaderMotion() {
  const headers = document.querySelectorAll('.page-header');
  if (!headers.length || prefersReducedMotion.matches) return;

  let ticking = false;

  const syncHeaders = () => {
    const viewportHeight = window.innerHeight || 1;
    headers.forEach((header) => {
      const rect = header.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (rect.height + viewportHeight * 0.45)));
      const shift = Math.max(-16, Math.min(20, (viewportHeight / 2 - rect.top) * 0.035));
      header.style.setProperty('--page-hero-progress', progress.toFixed(3));
      header.style.setProperty('--page-hero-shift', `${shift.toFixed(2)}px`);
    });
    ticking = false;
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(syncHeaders);
  };

  syncHeaders();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('js-ready');
  initLang();
  initNav();
  initMotionTargets();
  initReveal();
  initHeroMotion();
  initPageHeaderMotion();
});
