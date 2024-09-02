<template>
  <div class="container">
    <Line v-if="loaded" :data="chartData" />
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
} from 'chart.js'
import { apolloClient } from '@/utils/apollo-client'
import { SALES_QUERY } from '@/queries'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

export default {
  name: 'LineChart',
  components: { Line },
  data() {
    return {
      loaded: false,
      chartData: null
    }
  },
  async mounted() {
    this.loaded = false

    try {
      const { data } = await apolloClient.query({
        query: SALES_QUERY
      })

      this.chartData = {
        labels: data.Sales.data.map((sale) => sale.month),
        datasets: [
          {
            label: 'Sales Revenue for the year 2023',
            data: data.Sales.data.map((sale) => sale.revenue),
            backgroundColor: 'rgba(50, 150, 225, 0.5)',
            borderColor: 'rgba(153,102,255,1)',
            borderWidth: 1,
            fill: true
          }
        ]
      }

      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style></style>
