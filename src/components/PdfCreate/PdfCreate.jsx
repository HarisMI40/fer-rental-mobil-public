import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
  } from "@react-pdf/renderer";
  // Create styles
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "white",
      color: "black",
    },
    section: {
      margin: 10,
      padding: 10,
    },
  
    judul: {
      fontWeight: 700,
      fontSize: 24,
      marginTop: 10,
      marginLeft: 10,
      marginBottom: 20,
    },
    isi: {
      flexDirection: "row",
      fontWeight: 300,
      fontSize: 14,
      // marginTop: 10,
      marginLeft: 10,
      marginBottom: 5,
    },
    lebarJudul: {
      width: 80,
    },
    lebarIsi: {
      width: 200,
    },
  
    viewer: {
      // width: 557,
      // height: 200,
  
      width: window.innerWidth / 2.8,
      height: window.innerHeight / 5,
    //   height: 100,
    },
  });
  
  import {useEffect, useState} from "react";
  import axios from "axios";
  
  // Create Document Component
  function PdfCreate() {
    const [dataOrder, setDataOrder] = useState({});
    useEffect(() => {
      async function getData() {
        const {idOrder} = JSON.parse(localStorage.getItem("dataOrder"));
        const response = await axios.get(
          `customer/order/${idOrder}`,
        );
        const data = response.data;
        
        setDataOrder(data);
      }
  
      getData();
    }, []);
    
    //   tanggal start sewa
    let text = dataOrder?.start_rent_at;
    let result = text?.slice(0, 10);
    // console.log(result);
    // return;
    
    //   tanggal end sewa
    let text2 = dataOrder?.finish_rent_at;
    let result2 = text2?.slice(0, 10);
  
    return (
      <PDFViewer style={styles.viewer}>
        {/* Start of the document*/}
        <Document>
          {/*render a single page*/}
          <Page size="A5" style={styles.page}>
            <View style={styles.judul}>
              <Text>
                Binar Car Rental Kwitansi No.
                {dataOrder.id}
              </Text>
            </View>
            <View style={styles.isi}>
              <View style={styles.lebarJudul}>
                <Text>Email</Text>
              </View>
              <View style={styles.lebarIsi}>
                <Text>: {dataOrder?.User?.email}</Text>
              </View>
            </View>
  
            <View style={styles.isi}>
              <View style={styles.lebarJudul}>
                <Text>Kendaraan</Text>
              </View>
              <View style={styles.lebarIsi}>
                <Text>: {dataOrder?.Car?.name}</Text>
              </View>
            </View>
  
            <View style={styles.isi}>
              <View style={styles.lebarJudul}>
                <Text>Start Rent</Text>
              </View>
              <View style={styles.lebarIsi}>
                {/* <Text>: {dataOrder.start_rent_at}</Text> */}
                <Text>: {result}</Text>
              </View>
            </View>
            <View style={styles.isi}>
              <View style={styles.lebarJudul}>
                <Text>End Rent</Text>
              </View>
              <View style={styles.lebarIsi}>
                <Text>: {result2}</Text>
              </View>
            </View>
            <View style={styles.isi}>
              <View style={styles.lebarJudul}>
                <Text>Harga Sewa</Text>
              </View>
              <View style={styles.lebarIsi}>
                <Text>: {dataOrder.total_price}</Text>
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    );
  }
  export default PdfCreate;