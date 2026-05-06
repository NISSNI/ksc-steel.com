// ============================================
// KSC Website V2 — Multi-language Engine
// ============================================

const L = {
  nav: {
    home:      { zh:'首页',       en:'Home',       th:'หน้าแรก',        vi:'Trang chủ' },
    about:     { zh:'关于我们',   en:'About',      th:'เกี่ยวกับเรา',   vi:'Về chúng tôi' },
    products:  { zh:'产品中心',   en:'Products',   th:'ผลิตภัณฑ์',      vi:'Sản phẩm' },
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
    cta_btn2: { zh:'立即致电', en:'Call Now', th:'โทรตอนนี้', vi:'Goi ngay' },
    footer_brand: { zh:'高顺昌控股有限公司（KSC）专注金属材料行业超过25年，是中国、越南、泰国领先的金属材料供应商。', en:'KSC has focused on metal materials for over 25 years and is a leading supplier across China, Vietnam and Thailand.', th:'KSC มุ่งเน้นวัสดุโลหะมากว่า 25 ปี และเป็นผู้จัดหาชั้นนำในจีน เวียดนาม และไทย', vi:'KSC tap trung vao vat lieu kim loai hon 25 nam va la nha cung cap hang dau tai Trung Quoc, Viet Nam va Thai Lan.' },
    footer_scan: { zh:'扫码加微信', en:'Scan to add WeChat', th:'สแกนเพื่อเพิ่ม WeChat', vi:'Quet ma de ket noi WeChat' },
    footer_link1: { zh:'首页', en:'Home', th:'หน้าแรก', vi:'Trang chu' },
    footer_link2: { zh:'关于我们', en:'About Us', th:'เกี่ยวกับเรา', vi:'Ve chung toi' },
    footer_link3: { zh:'产品中心', en:'Products', th:'ผลิตภัณฑ์', vi:'San pham' },
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
    loc_dg: { zh:'广东，中国 Dongguan, Guangdong', en:'Dongguan, Guangdong, China', th:'ตงก่วน กวางตุ้ง ประเทศจีน', vi:'Dongguan, Quang Dong, Trung Quoc' },
    loc_sz: { zh:'江苏，中国 Suzhou, Jiangsu', en:'Suzhou, Jiangsu, China', th:'ซูโจว เจียงซู ประเทศจีน', vi:'Suzhou, Giang To, Trung Quoc' },
    loc_xy: { zh:'江西，中国 Xinyu, Jiangxi', en:'Xinyu, Jiangxi, China', th:'ซินหยู เจียงซี ประเทศจีน', vi:'Xinyu, Giang Tay, Trung Quoc' },
    loc_vn: { zh:'越南 Haiphong, Vietnam', en:'Haiphong, Vietnam', th:'ไฮฟอง เวียดนาม', vi:'Hai Phong, Viet Nam' },
    loc_th: { zh:'泰国 Chon Buri, Thailand', en:'Chon Buri, Thailand', th:'ชลบุรี ประเทศไทย', vi:'Chon Buri, Thai Lan' },
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
    copper_r4: { zh:'高强度应用', en:'High-strength applications', th:'งานกำลังสูง', vi:'Ung dung cuong do cao' }
  },
  contactPage: {
    locations: { zh:'我们的据点', en:'Our Locations', th:'ที่ตั้งของเรา', vi:'Cac dia diem cua chung toi' },
    hq: { zh:'香港总部', en:'Hong Kong Headquarters', th:'สำนักงานใหญ่ฮ่องกง', vi:'Tru so Hong Kong' },
    dg: { zh:'深圳/东莞工厂', en:'Shenzhen / Dongguan Plant', th:'โรงงานเซินเจิ้น / ตงก่วน', vi:'Nha may Shenzhen / Dongguan' },
    sz: { zh:'苏州工厂', en:'Suzhou Plant', th:'โรงงานซูโจว', vi:'Nha may Suzhou' },
    xy: { zh:'新余工厂', en:'Xinyu Plant', th:'โรงงานซินหยู', vi:'Nha may Xinyu' },
    vn: { zh:'越南工厂', en:'Haiphong Plant', th:'โรงงานไฮฟอง', vi:'Nha may Hai Phong' },
    th: { zh:'泰国工厂', en:'Chon Buri Plant', th:'โรงงานชลบุรี', vi:'Nha may Chon Buri' },
    dg_loc: { zh:'广东省，中国', en:'Guangdong, China', th:'กวางตุ้ง ประเทศจีน', vi:'Quang Dong, Trung Quoc' },
    sz_loc: { zh:'江苏省，中国', en:'Jiangsu, China', th:'เจียงซู ประเทศจีน', vi:'Giang To, Trung Quoc' },
    xy_loc: { zh:'江西省，中国', en:'Jiangxi, China', th:'เจียงซี ประเทศจีน', vi:'Giang Tay, Trung Quoc' },
    vn_loc: { zh:'海防，越南', en:'Haiphong, Vietnam', th:'ไฮฟอง เวียดนาม', vi:'Hai Phong, Viet Nam' },
    th_loc: { zh:'春武里，泰国', en:'Chon Buri, Thailand', th:'ชลบุรี ประเทศไทย', vi:'Chon Buri, Thai Lan' },
    sales: { zh:'销售代表', en:'Sales Representative', th:'ผู้แทนฝ่ายขาย', vi:'Dai dien kinh doanh' },
    name: { zh:'姓名', en:'Name', th:'ชื่อ', vi:'Ten' },
    mobile: { zh:'手机', en:'Mobile', th:'โทรศัพท์มือถือ', vi:'Di dong' },
    email: { zh:'邮箱', en:'Email', th:'อีเมล', vi:'Email' },
    wechat: { zh:'微信联系', en:'Contact via WeChat', th:'ติดต่อผ่าน WeChat', vi:'Lien he qua WeChat' },
    wechat_desc: { zh:'扫码识别，备注"询价"更快响应', en:'Scan the QR code and note \"inquiry\" for a faster reply.', th:'สแกนคิวอาร์และพิมพ์ว่า \"inquiry\" เพื่อให้ตอบกลับได้เร็วขึ้น', vi:'Quet ma QR va ghi chu \"inquiry\" de duoc phan hoi nhanh hon.' },
    placeholder_name: { zh:'您的姓名', en:'Your Name', th:'ชื่อของคุณ', vi:'Ten cua ban' },
    placeholder_email: { zh:'您的邮箱', en:'Your Email', th:'อีเมลของคุณ', vi:'Email cua ban' },
    placeholder_company: { zh:'公司名称', en:'Company Name', th:'ชื่อบริษัท', vi:'Ten cong ty' },
    placeholder_product: { zh:'咨询产品（如：特钢/铝材/不锈钢）', en:'Product Interest (e.g. Special Steel / Aluminum / Stainless Steel)', th:'สินค้าที่สนใจ (เช่น เหล็กพิเศษ / อะลูมิเนียม / สแตนเลส)', vi:'San pham quan tam (vi du: Thep dac biet / Nhom / Thep khong gi)' },
    placeholder_message: { zh:'请输入您的留言...', en:'Please enter your message...', th:'กรุณากรอกข้อความของคุณ...', vi:'Vui long nhap loi nhan cua ban...' },
    submit: { zh:'发送留言', en:'Send Message', th:'ส่งข้อความ', vi:'Gui tin nhan' },
    sent: { zh:'已发送 ✓', en:'Sent ✓', th:'ส่งแล้ว ✓', vi:'Da gui ✓' }
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

  // Update lang button label
  const labelEl = document.querySelector('.lang-current-label');
  if (labelEl) labelEl.textContent = currentLang.toUpperCase();

  // Update active lang option
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === currentLang);
  });

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

  const btn = document.querySelector('.lang-btn');
  const dropdown = document.querySelector('.lang-dropdown');
  btn?.addEventListener('click', e => { e.stopPropagation(); dropdown?.classList.toggle('show'); });
  document.addEventListener('click', () => dropdown?.classList.remove('show'));
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', () => {
      currentLang = opt.dataset.lang;
      applyTranslations();
      dropdown?.classList.remove('show');
    });
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

function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length || !('IntersectionObserver' in window)) {
    items.forEach(item => item.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.16 });

  items.forEach(item => observer.observe(item));
}

document.addEventListener('DOMContentLoaded', () => {
  initLang();
  initNav();
  initReveal();
});
