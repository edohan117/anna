<template>
  <div class="min-h-screen bg-gray-50 text-gray-900 font-sans">
    <div class="container mx-auto px-6 py-16">
      <div class="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
        <main class="py-12 px-6">
          <h2 class="text-3xl font-semibold text-gray-800 mb-10 text-center relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-indigo-600">
            추천 심리 테스트
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              v-for="test in tests" 
              :key="test.id" 
              class="test-card group"
            >
              <div class="bg-white border-2 border-transparent rounded-xl p-6 flex flex-col justify-between transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg hover:border-indigo-500">
                <div>
                  <h3 class="text-2xl font-semibold text-indigo-700 mb-4 transition-colors group-hover:text-indigo-900">
                    {{ test.name }}
                  </h3>
                  <p class="text-gray-600 font-medium leading-relaxed">
                    {{ test.description }}
                  </p>
                </div>
                <button 
                  @click="startTest(test.id)"
                  class="btn-gradient mt-6"
                >
                  테스트 시작
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tests: [
        { 
          id: 1, 
          name: '성격 인사이트', 
          description: '당신의 성격을 과학적 알고리즘으로 분석하여 인사이트를 제공합니다.'
        },
        { 
          id: 2, 
          name: '스트레스 디코더', 
          description: '숨겨진 스트레스 패턴을 분석하여 관리 방법을 제시합니다.'
        },
        { 
          id: 3, 
          name: '감정 커뮤니케이션', 
          description: '당신만의 감정 표현 방식을 분석하여 더 나은 커뮤니케이션 방법을 제시합니다.'
        }
      ]
    }
  },
  methods: {
    startTest(testId) {
      if (this.$router) {
        this.$router.push({ name: 'test', params: { testId }})
      } else {
        alert(`테스트 ${testId}를 준비 중입니다.`)
      }
    }
  }
}
</script>

<style scoped>
.bg-gray-50 {
  background-color: #f9fafb;
}

.btn-gradient {
  padding: 12px 24px;
  background: linear-gradient(to right, #4e73df, #1f4d87);
  color: white;
  border-radius: 12px;
  font-weight: 600;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border: none;
}

.btn-gradient:hover {
  background: linear-gradient(to right, #1f4d87, #4e73df);
  transform: scale(1.05);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

.btn-gradient:focus {
  outline: none;
  box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.6);
}

.test-card {
  padding: 20px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.test-card:hover {
  animation: subtle-float 1.5s ease-in-out infinite;
}

.test-card .btn-gradient {
  margin-top: 16px;
}

@media (max-width: 768px) {
  .test-card {
    padding: 16px;
  }

  .test-card .btn-gradient {
    width: 100%;
    text-align: center;
  }
}

@keyframes subtle-float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
}
</style>
