<template>
  <main class="bg-gray-100 min-h-screen flex flex-col items-center p-6">
    <header class="header-container">
      <h1 class="header-title">Sales Revenue Dashboard</h1>
      <button class="logout-button" @click="handleLogout">Logout</button>
    </header>

    <div class="bg-white shadow-md rounded-lg mt-5 p-6 max-w-3xl w-full">
      <h2 class="text-2xl font-semibold text-gray-700 mb-6 text-center">Revenue Overview</h2>

      <div class="flex flex-col items-center">
        <div class="w-full max-w-3xl mb-6">
          <BarChart />
        </div>

        <div
          class="bg-gradient-to-br from-blue-500 to-teal-400 p-6 rounded-lg shadow-xl text-white w-full max-w-xs"
        >
          <h3 class="text-xl font-semibold mb-4">Quick Stats</h3>
          <ul class="space-y-2">
            <li class="flex items-center">
              <svg
                class="h-6 w-6 mr-3 text-yellow-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 20h10M7 16h10M7 12h10M7 8h10"
                ></path>
              </svg>
              <span class="flex-1">Total Revenue:</span>
              <span>$420,000</span>
            </li>
            <li class="flex items-center">
              <svg
                class="h-6 w-6 mr-3 text-green-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 8h16M4 12h16m-7 4h7"
                ></path>
              </svg>
              <span class="flex-1">New Sales:</span>
              <span>150</span>
            </li>
            <li class="flex items-center">
              <svg
                class="h-6 w-6 mr-3 text-red-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4h16v16H4V4z"
                ></path>
              </svg>
              <span class="flex-1">Pending Orders:</span>
              <span>5</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <footer
      class="w-full bg-gradient-to-r from-indigo-500 to-gray-700 shadow-lg p-6 mt-6 text-center text-gray-300"
    >
      <p class="text-base font-light tracking-wider">
        &copy; 2024 <span class="font-semibold text-blue-400">Vuelytic</span>. All rights reserved.
      </p>
      <div class="mt-2">
        <a href="#" class="text-blue-200 hover:text-blue-400 transition-colors duration-300"
          >Privacy Policy</a
        >
        |
        <a href="#" class="text-blue-200 hover:text-blue-400 transition-colors duration-300"
          >Terms of Service</a
        >
      </div>
    </footer>
  </main>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import BarChart from '@/components/BarChartGraphQL.vue'

export default {
  name: 'Dashboard',
  components: { BarChart },
  setup() {
    const store = useStore()
    const router = useRouter()

    const handleLogout = () => {
      store.commit('logout')

      router.push({ name: 'Login' })
    }

    return {
      handleLogout
    }
  }
}
</script>

<style scoped>
.header-container {
  width: 100%;
  background: #4a90e2;
  color: #fff;
  padding: 12px 24px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}

.logout-button {
  background-color: #ff4f4f;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.logout-button:hover {
  background-color: #e03a3a;
}

.quick-stats {
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.quick-stats h3 {
  font-size: 1.25rem;
  margin-bottom: 16px;
}

.quick-stats ul {
  list-style: none;
  padding: 0;
}

.quick-stats li {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.quick-stats svg {
  width: 24px;
  height: 24px;
}

.quick-stats span {
  flex: 1;
}
</style>
