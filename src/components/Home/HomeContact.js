import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import "./Home.css";
import Fade from "react-reveal";

export default class HomeContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      branches: {
        karachi: [
          {
            name: "Saylani Welfare",
            branchName: "Saylani Kharadar Branch",
            number: "03111-729-526",
            address: "Kharadar Ghulam Hussain Kasim Quarters, Karachi.",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.3938173349775!2d66.99504011447742!3d24.85039575178205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb315f8c713a357%3A0xc2835b1c7023aae1!2sMooljee%20St%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609542879670!5m2!1sen!2s",
          },
          {
            Name: "Saylani Welfare",
            branchName: "Saylani S.I.T.E Branch",
            number: " 03111-729-526",
            address:
              ",Ghani Chowrangi S.I.T,E,  Sindh Industrial Trading Estate, Karachi,",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.086241710335!2d66.9865167144782!3d24.89503975000302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3157a412ba1b1%3A0x42a522cc5a0603d7!2sSaylani%20Welfare!5e0!3m2!1sen!2s!4v1609543967105!5m2!1sen!2s",
          },
          {
            name: "Saylani Welfare",
            branchName: "Saylani Phase-2 Defence Branch",
            address:
              "C28/B 24th Commercial St, Phase 2 Commercial Area Defence Housing Authority, Karachi,",
            number: " 03111-729-526",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.9037826357553!2d67.06521861447698!3d24.832963852476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c3f7e08fb05%3A0xda840b5c146200b!2sSouth%20Park%20Avenue%2C%20Phase%202%20Commercial%20Area%20Defence%20Housing%20Authority%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2075500%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609544387848!5m2!1sen!2s",
          },
          {
            name: "Saylani Welfare",
            branchName: "Saylani Nazimabad Branch",
            number: "03111-729-526",
            address: "Main Goli Mar Chowrangi near AmeerHamza Masjid",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.7687288469706!2d67.02856461447851!3d24.905869149571007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fb07928d41d%3A0x7c21e4eff11927d3!2sNawab%20Siddique%20Ali%20Khan%20Rd%2C%20Block%202%20Nazimabad%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2074600%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609544909174!5m2!1sen!2s",
          },
          {
            name: "Saylani Welfare (Blood Bank)",
            address:
              "A-495 Allama Shabbir Ahmed Usmani Rd, Block 4 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
            number: "03111-729-526",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.010475609177!2d67.09847661447897!3d24.931713048539265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f356af6ea39%3A0x2855f05276f1c3f2!2sAllama%20Shabbir%20Ahmed%20Usmani%20Rd%2C%20Block%204%20Gulshan-e-Iqbal%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609545613800!5m2!1sen!2s",
          },
          {
            name: "Saylani Welfare",
            branchName: "Saylani Johar-2 Branch",
            number: "03111-729-526",
            address: "Block 13 Gulistan-e-Johar, Karachi, Karachi City, Sindh",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.4982217335455!2d67.12694141447868!3d24.91509184920294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338e3cbb24c07%3A0x48fb9b4163def42!2sJauhar%20Chowrangi%20Service%20Ln%2C%20Block%2013%20Gulistan-e-Johar%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609546590254!5m2!1sen!2s",
          },
          {
            name: "Saylani Welfare",
            branchName: "Saylani Bolton Branchs",
            number: "03111-729-526",
            address:
              "M. A. Jinnah Road، Bunder Quarter, Karachi, Karachi City, Sindh",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.3867397245917!2d66.99718191447738!3d24.850637601772426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb315ff55c5e40f%3A0x6f59600ca7bea683!2sSind%20Market!5e0!3m2!1sen!2s!4v1609549488456!5m2!1sen!2s",
          },
          {
            name: "Saylani Welfare",
            branchName: "Saylani Civil Branch",
            number: "03111-729-526",
            address:
              "Near Chaand Bibi Road، Dehli Colony، KMC Work Area, Karachi, Karachi City, Sindh",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0957205032587!2d67.00832961447756!3d24.860580151376578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e1a8080ff07%3A0xe593f5e1d593ac2d!2sSaylani%20Welfare%20Civil%20Hospital!5e0!3m2!1sen!2s!4v1609550042653!5m2!1sen!2s",
          },
          {
            name: "Saylani Welfare",
            branchName: "Saylani Crown Branch",
            number: "03111-729-526",
            address:
              "A-193 Jehangir Rd, Baloch Para Anjuman, Karachi, Karachi City, Sindh",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.380740385718!2d67.03864561447804!3d24.884991350403663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e573ece0fe9%3A0xd688035972ee1ab1!2sJehangir%20Rd%2C%20Baloch%20Para%20Anjuman%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609550416583!5m2!1sen!2s",
          },
          {
            name: "Saylani Welfare",
            branchName: "Saylani Aliabad Branch",
            number: "03111-729-526",
            address: "Hussainabad Near Tabbah Heart Hospital And Noori Masjid",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.3424397071403!2d67.06096816447871!3d24.920401648991025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f136c31a865%3A0x30b7f130205b99cd!2sFederal%20B%20Area%20Porbander%20Colony%20Block%203%20Gulberg%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609551504016!5m2!1sen!2s",
          },
          {
            name: "Saylani Welfare",
            branchName: "Saylani Punjab Chowrangi Branch",
            number: "03111-729-526",
            address:
              "Main Punjab Chowrangi Opposite Gizri Football Ground Near Altamash Dental Clinic",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.149933223714!2d67.04410211447686!3d24.824545702810894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33db4aafe6847%3A0x248bf62a881da1ea!2sQalandri%20Football%20Ground%2C%20Lower%20Gizri%20Gizri%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2075600%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609552507146!5m2!1sen!2s",
          },
          {
            name: "Saylani Welfare",
            branchName: "Saylani Korangi  Branch",
            number: "03111-729-526",
            address: "Korangi#4 Opposite korangi Mobile Market",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.046973911864!2d67.15808741447684!3d24.828067152670872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33a55eb8738e1%3A0x7ad5cc61af491354!2sKorangi%2012000%20Rd%2C%20Sector%2035%20E%20Landhi%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609552835619!5m2!1sen!2s",
          },
          {
            name: "Saylani Welfare",
            branchName: "Saylani Mehran Town Branch",
            number: "03111-729-526",
            address:
              "75120, Sector 35 E Landhi Town, Karachi, Karachi City, Sindh 75120",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7241.300277461835!2d67.09090047301993!3d24.841635472400394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33bf596c86749%3A0xf8988f019c5715d4!2sSector%205%20Korangi%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609626987160!5m2!1sen!2s",
          },
          {
            name: "Saylani Welfare",
            branchName: "Saylani North-Karachi 5C-2",
            number: "03111-729-526",
            address: "Main Barra Market Near Aosaaf Clinic 5-C 2",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.2611350984207!2d67.0602833644802!3d24.99124119615928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3411db9628503%3A0xc049732e61595681!2sSector%205c%2F2%20Sector%205%20C%202%20New%20Karachi%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609627320542!5m2!1sen!2s",
          },
          {
            name: "Saylani Welfare",
            branchName: "Saylani Paposh Branch",
            number: "03111-729-526",
            address: "Address:Main Paposh Market 5-C 14/6 Near Opposite UBL",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7236.905789702729!2d67.02238817302613!3d24.91663691635043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f958bdae99b%3A0xf19ca6d11a81bb35!2sBlock%203%20Nazimabad%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2074600%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609628022344!5m2!1sen!2s",
          },
          {
            name: "Saylani Welfare",
            branchName: "Saylani Gulshan Branch",
            number: "03111-729-526",
            address: "Abu Al Hasan Asphani Road Gulshan E Iqbal Near Esaa Lab",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.8650600854003!2d67.10134641447908!3d24.936666448341445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338b224379d4f%3A0x828e956b0d45c8c!2sAbul%20Hasan%20Isphahani%20Rd%2C%20Block%204%20Gulshan-e-Iqbal%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609628709177!5m2!1sen!2s",
          },
          {
            name: "Saylani Welfare",
            branchName: "Saylani Medicare Branch",
            number: "03111-729-526",
            address:
              "Service Road ,Medicare Hospital ,Shaheed e Millat road, Karachi",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7238.845739609061!2d67.06160962302332!3d24.883553569021213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eebdf80dac7%3A0x58a5032a4aad92f4!2sBMCHS%20Sharafabad%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609629270206!5m2!1sen!2s",
          },
          {
            name: "Saylani Welfare",
            branchName: "Saylani Hillpark Branch",
            number: "03111-729-526",
            address:
              "Plot 18/Z Block 7/8 Commercial Area KMCSH Near Ideal Bakery Hill Park",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7239.699564866521!2d67.0736601730222!3d24.868979620196598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ebb34140667%3A0x3efd6896ee5ab445!2sKarachi%20Memon%20Co-operative%20Housing%20Society%20PECHS%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609629620122!5m2!1sen!2s",
          },
          {
            name: "Saylani Welfare",
            branchName: "Saylani Jinnah Avenue Branch",
            number: "03111-729-526",
            address:
              "House No. 6 MC 153 Air Port Back Site Near Security Printing Press Jinnah Avenue",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.1560077817694!2d67.1760643144782!3d24.892659650097983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339e631d5ca59%3A0x67dbb4b9d8aa396d!2sSecurity%20Papers%20Limited!5e0!3m2!1sen!2s!4v1609630391898!5m2!1sen!2s",
          },
          {
            name: "Saylani Welfare",
            branchName: "Saylani M.A.Society Branch",
            number: "03111-729-526",
            address:
              "Main KDA Chowrangi Muhammad Ali Society Near Subway Restaurant",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.4593725444724!2d67.08414391447799!3d24.882307750510645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ec9c396cb71%3A0xca1152e62666fc5a!2sMiran%20Mohammed%20Shah%20Rd%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609630936012!5m2!1sen!2s",
          },
          {
            name: "Saylani Welfare",
            branchName: "Saylani gulshan Branch",
            number: "03111-729-526",
            address: "Abu Al Hasan Asphani Road Gulshan E Iqbal Near Esaa Lab ",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.8650600854003!2d67.10134641447908!3d24.936666448341445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338b224379d4f%3A0x828e956b0d45c8c!2sAbul%20Hasan%20Isphahani%20Rd%2C%20Block%204%20Gulshan-e-Iqbal%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609631937076!5m2!1sen!2s",
          },
          {
            name: "Saylani Welfare",
            branchName: "Saylani Gulistan e jauhar Branch",
            number: "03111-729-526",
            address:
              "Block 13 Gulistan-e-Johar,  opposite   Darul sehat hospital Karachi,",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.4982217335455!2d67.12694141447868!3d24.91509184920294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338e3cbb24c07%3A0x48fb9b4163def42!2sJauhar%20Chowrangi%20Service%20Ln%2C%20Block%2013%20Gulistan-e-Johar%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609632693233!5m2!1sen!2s",
          },
          {
            name: "Saylani Welfare",
            branchName: "Saylani Saylani Numaish Branch",
            number: "03111-729-526",
            address: "Main Numaish Chowrangi, karachi",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.683970761599!2d67.03445071447787!3d24.87464105081632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e5d12ce1e7d%3A0x9ae67161127edd5d!2s297%20M.A%20Jinnah%20Rd%2C%20Soldier%20Bazaar%20Catholic%20Colony%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609633905657!5m2!1sen!2s",
          },
          {
            name: "Saylani Welfare",
            branchName: "Saylani Logistic centre Branch",
            number: "03111-729-526",
            address:
              "Main Peoples Chowrangi Nearest Peoples Secretariat Office",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.614105504779!2d67.0425619144778!3d24.877026150721196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e5fa1375d2b%3A0x640ae949d6e09e94!2sNauroji%20Cres%2C%20Jamshed%20Quarters%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609636957089!5m2!1sen!2s",
          },
          {
            name: "Saylani Welfare",
            branchName: "Saylani Garden Branch",
            number: "03111-729-526",
            address: "Garden west , near Jumman shah Mazar, karachi",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.5461938972994!2d67.02217841447795!3d24.879344350628806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e470bafe265%3A0x7573dd4e7eb5000c!2sTagrur%20St%2C%20Soldier%20Bazaar%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609637287937!5m2!1sen!2s",
          },
          {
            name: "Saylani Welfare",
            branchName: "Saylani Burns Road Branch",
            number: "03111-729-526",
            address:
              "Plot No. KS 164/A Opposite Govt Women College Burns Road Karachi",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.1866304401706!2d67.01597261447752!3d24.85747465150016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e0dc07f566f%3A0x2b37e473154f7f0f!2sSaylani%20Welfare%20BurnsRoad%20Branch!5e0!3m2!1sen!2s!4v1609638075832!5m2!1sen!2s",
          },
          {
            name: "Saylani Welfare",
            branchName: "",
            number: "",
            address: "DHA Tauheed, Defence, Quyumabad, Karachi.",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.9979841658837!2d67.08042371447692!3d24.829742552604255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c71fb84fe55%3A0x9bc397c3361904f5!2sKE%20KORANGI%20CREEK%20GRID%20STATION!5e0!3m2!1sen!2s!4v1609638876814!5m2!1sen!2s",
          },
        ],
        hyderabad: [
          {
            branchName: "Saylani Latifabad no 7 Branch",
            number: "022 2611429",
            address: "LATIFABAD NO 07 GHOURI DREAM PLAZA NEAR SONERI BANK",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.0272965188306!2d68.35340371448787!3d25.370401630878675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c70610335fe29%3A0x69f4044a2b45ac4a!2sSakhi%20Sultan%20Rd%2C%20Latifabad%20Unit%207%20Latifabad%2C%20Hyderabad%2C%20Sindh%2071000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609498876882!5m2!1sen!2s",
          },
          {
            branchName: "Saylani Sarfaraz colony Branch",
            number: "022 2611429",
            address: "Sarfaraz colony near Bin Tayyab Hospital",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.2155290082146!2d68.36310901448844!3d25.397595129774626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c70c273249247%3A0x526f742527cce17a!2s16%20Sarfaraz%20Incline%2C%20Dadan%20Shah%20Hyderabad%2C%20Sindh%2071500%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609499639621!5m2!1sen!2s",
          },
          {
            branchName: "Saylani Qasimabad Branch",
            number: "022 2611429",
            address: "QASIMABAD PAKKORA STOP NEAR AL FALAH BANK",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.3890584776827!2d68.3350577144884!3d25.391784330010644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c709f9f75a685%3A0x109ab36d60656a31!2sMain%20Qasimabad%20Rd%2C%20Block%20-%20I%20Phase%201%20Qasimabad%2C%20Hyderabad%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609499892762!5m2!1sen!2s",
          },
          {
            branchName: "Saylani Latifabad no 8 Branch",
            number: "022 2611429",
            address:
              "LTIFABAD NO 08 TAYYABA MASJID NEAR SAMI PALACE MARRIAGE LAWN",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.0968814277035!2d68.36429761448784!3d25.368069330973224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c705bcb92027d%3A0xa8b4e7d48679c79d!2sTayyaba%20Masjid%2C%20Latifabad%20Unit%208%20Latifabad%2C%20Hyderabad%2C%20Sindh%2071000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609500219278!5m2!1sen!2s",
          },
          {
            branchName: "Saylani Kohsar Branch",
            number: "022 2611429",
            address: "KOHSAR FACE 1 NEAR GOVT HOSPITAL",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.8764454030566!2d68.36719031448725!3d25.341926732033446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c703aa939f397%3A0x2b19b6b39d6a9084!2sNear%20Sindh%20Government%20Hospital%20Kohsar!5e0!3m2!1sen!2s!4v1609500452588!5m2!1sen!2s",
          },
          {
            branchName: "Saylani Afandi Town Branch",
            number: "022 2611429",
            address: "AFANDI TOWN PINJERA POOL NEAR SHELL PETROL PuMP",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.4082552940363!2d68.3777500144883!3d25.391141430036853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c70e2970f7d77%3A0xfe702bbe4a16bbd2!2sAfandi%20Town%20Rd%2C%20Afandi%20Town%20Hyderabad%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609500678743!5m2!1sen!2s",
          },
          {
            branchName: "Saylani Civil Hospital Branch",
            number: "022 2611429",
            address: "CIVIL HOSPITAL NEAR EMERGANCEY GATE",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.1065778307197!2d68.36491211448858!3d25.40124282962644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c713402a1c21b%3A0x3214c57c78135171!2sCHILD%20LIFE%20FOUNDATION%20HYD!5e0!3m2!1sen!2s!4v1609500864095!5m2!1sen!2s",
          },
        ],
        punJab: [
          {
            branchName: "Saylani House Rawalpindi branch",
            number: "051-4571074",
            address: "S-25-A Asghar Mall Scheme National Market Rawalpindi",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212779.44061106668!2d72.88111945563067!3d33.561721818581326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df948974419acb%3A0x984357e1632d30f!2sRawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609503138613!5m2!1sen!2s",
          },
          {
            branchName: "Saylani Chandani Chowk Rawalpindi Branch",
            number: "051-4571858",
            address: "B-218 Near KFC Settlite Town Rawalpindi",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53137.59254666055!2d73.08751755651762!3d33.65458276197357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df94d945491d59%3A0x6e08e6b649c1078e!2sKFC!5e0!3m2!1sen!2s!4v1609503501336!5m2!1sen!2s",
          },
          {
            branchName: "Saylani F-10 Markaz Islamabad Branch",
            number: "051-2223191",
            address:
              "Shop # 7-J Unit 5, Al Sagheer Plaza F-10 Markaz Islamabad",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6639.047497596932!2d73.00856932386962!3d33.69539399921819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe6b3168b499%3A0xf1c45770d2ab2a5b!2sF-10%20Markaz%20F-10%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609503643971!5m2!1sen!2s",
          },
          {
            branchName: "Saylani WaltonRoad Branch",
            number: "042-36616577",
            address: "Main walton road near boys scout stop lahore",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435518.6817829184!2d74.05419161381934!3d31.483220875157084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609503848854!5m2!1sen!2s",
          },
          {
            branchName: "Saylani Main shadman Branch",
            number: "042-36616577",
            address: "Main shadman opposite sawera store lahore",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.449570651618!2d74.32637131463144!3d31.53927445336502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904bdeeca8511%3A0xa311044456ea08db!2sSwera%20Departmental%20Store!5e0!3m2!1sen!2s!4v1609504083299!5m2!1sen!2s",
          },
          {
            branchName: "Saylani Shamma Branch",
            number: "042-36616577",
            address: "Main Shamma Metro stop Sabri plaza lahore",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13602.742008774096!2d74.30959197476881!3d31.53279669119215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919049bf02720f9%3A0x4295a66061acf664!2sIchhra%20Lahore%2C%20Punjab%2054000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609504296307!5m2!1sen!2s",
          },
          {
            branchName: "Saylani 7up Branch",
            number: "042-5245766",
            address: "under 7up bridge cavalary ground lahore",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6803.711987983844!2d74.36468047363354!3d31.500641873301504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905b7bfe005a9%3A0x9007fdd3229144a6!2sCavalry%20Ground%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609504452739!5m2!1sen!2s",
          },
          {
            branchName: "Saylani Cantt Branch",
            number: "042-36622645",
            address: "cantt branch near cantt kichari lahore",
            location:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108844.5640844924!2d74.33543162430881!3d31.51337462382497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919050e085e7535%3A0xfbf788dae725f245!2sLahore%20Cantt.%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609504623171!5m2!1sen!2s",
          },
        ],
      },
      currentLocation: {
        name: "Head Office",
        number: "+92 21 111 729 526",
        location:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.3369624937686!2d67.04072941500263!3d24.85233848405778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa51eb1299cdbf258!2sSaylani%20Welfare!5e0!3m2!1sen!2s!4v1609479035978!5m2!1sen!2s",
        address: "Kharadar Ghulam Hussain Kasim Quarters, Karachi",
      },
      currentCity: "",
      currentArr: [],
    };
  }
  componentDidMount() {
    const { currentArr, currentCity, branches } = this.state;
    this.setState({ currentArr: branches.karachi });
  }
  city(e) {
    const { currentArr, currentCity, branches } = this.state;
    let a = e.target.value;
    if (a == "Karachi") {
      this.setState({ currentArr: branches.karachi });
    } else if (a == "Hyderabad") {
      this.setState({ currentArr: branches.hyderabad });
    } else if (a == "Punjab") {
      this.setState({ currentArr: branches.punJab });
    }
  }
  render() {
    const { currentCity } = this.state;
    return (
      <div>
        <div className="container ">
          <div className="displayheading">
            <h2>Saylani Welfare Branches</h2>
          </div>
        </div>
        <div className="backgroundLight border-bottom">
          <div className="py-5 shadow backgroundDark">
            <div className="container">
              <select
                style={{
                  border: "none",
                  fontSize: "2em",
                  borderBottom: "2px solid white",
                  padding: "10px 15px",
                  outline: "none",
                  color: "white",
                  backgroundColor: "transparent",
                }}
                onChange={(e) => this.city(e)}
              >
                <option className="text-dark">Karachi</option>
                <option className="text-dark">Hyderabad</option>
                <option className="text-dark">Punjab</option>
              </select>
            </div>
          </div>
          <div
            style={{ height: "70vh", overflow: "scroll", overflowX: "hidden" }}
            className="container py-4"
          >
            <div className="row">
              {this.state.currentArr.map((e, i) => {
                return (
                  <div className="col-md-4 py-3">
                    <div
                      onClick={() => this.setState({ currentLocation: e })}
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                      className="card branchCard bg-white p-3 shadow rounded"
                    >
                      <p className="location">{e.branchName}</p>
                      <p className="text-muted">
                        <i class="fas fa-map-marker-alt"></i> A-25,
                        {e.address}
                      </p>
                      <p>
                        <i class="fas fa-phone-alt"></i>{" "}
                        <a href="tel:111729526">UAN: {e.number}</a>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div></div>

          <div
            class="modal fade"
            id="exampleModalLong"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLongTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div
                  style={{ backgroundColor: "#0066b3", color: "white" }}
                  class="modal-header"
                >
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    {this.state.currentLocation.branchName}
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <iframe
                    src={this.state.currentLocation.location}
                    width="100%"
                    height="450"
                    frameborder="0"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                  ></iframe>
                </div>
                <div class="modal-footer">
                  <button type="button" class="prevbtn" data-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
