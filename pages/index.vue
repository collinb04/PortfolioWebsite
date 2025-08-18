<template>
  <appear>
    <div id="top" class="flex flex-row justify-center items-center min-h-screen">
        
        <div class="flex flex-col justify-center items-center min-h-screen">
        <h1 class="text-center text-xl font-medium text-white leading-10">
            Hello, I'm
            <br>
                <span class="font-semibold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600">Collin Brennan</span>
            </br>
            <br>
                <span class="text-blue-600 font-semibold text-5xl">Full Stack Engineer</span>
            </br>
        </h1>
        <div class="flex flex-col justify-center items-center">
          <div class="flex flex-row mt-4">
              <button class="outline outline-blue-600 rounded-full text-white font-medium py-2 px-4 m-2 hover:scale-110 transition-all duration-200">
                  Download CV
              </button>
              <button class="bg-blue-600 text-white rounded-full font-medium py-2 px-4 m-2 hover:scale-110 transition-all duration-200">
                  Contact Me
              </button>
          </div>
            <div class="flex flex-row mt-4">
              <a href="https://www.linkedin.com/in/collin-brennan-078407273/">
                  <img src="/public/linkedin.png" alt="LinkedIn" class="w-14 h-14 inline-block mr-2" />
            </a>
              <button>
                  <img src="/public/github.png" alt="GitHub" class="w-14 h-14 inline-block mr-2" />
              </button>
            </div>
        </div>
        </div>
    </div>

    <appear>
      <div class="py-20">
  <!-- Header -->
  <div class="text-center mb-16">
    <h1 class="text-6xl md:text-6xl font-bold bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 bg-clip-text text-transparent mb-6">
      About Me
    </h1>
    <div class="w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-200 mx-auto rounded-full"></div>
  </div>

  <!-- Content -->
  <div class="max-w-7xl mx-auto px-4">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Image Section -->
      <div class="flex justify-center lg:justify-end">
        <div class="relative group">
          <img 
            src="/public/IMG_5146.JPG" 
            alt="picture of me" 
            class="w-100 h-90 object-cover rounded-2xl transition-all duration-300 border border-white/10" 
          />
        </div>
      </div>

      <!-- Text Section -->
      <div class="space-y-6 lg:pl-8">
        <div class="space-y-6 text-white">
          <p class="text-lg font-light leading-relaxed backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            I'm <span class="font-semibold text-blue-300">Collin Brennan</span>, a software engineer who turns ideas into real solutions. 
            At my current startup role, I work across the stack — from building backends in Python and frontends in Vue, to integrating user databases, developing Flutter apps, and even prototyping hardware devices. 
            From my professional career to daily life, I thrive under pressure, adapt fast, and deliver results.
          </p>
          
          <p class="text-lg font-light leading-relaxed backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            When I'm not coding, you'll find me learning, teaching, or testing my limits in the gym! 
            As a whole, programming is a vessel for me to do what makes me happiest: <span class="font-medium text-blue-300">be creative</span>, <span class="font-medium text-blue-300">exhibit leadership</span>, and <span class="font-medium text-blue-300">problem-solve</span>.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
    </appear>
    

    <appear>
      <div id="skills" class="min-h-screen py-20 px-4 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Header -->
      <div class="text-center mb-20">
        <h1 class="text-6xl md:text-6xl font-bold bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 bg-clip-text text-transparent mb-6">
          Skills & Expertise
        </h1>
        <div class="w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-200 mx-auto rounded-full"></div>
      </div>

      <!-- Skills Grid -->
      <div class="grid lg:grid-cols-2 gap-12 items-start">
        
        <!-- Left Side: Skill Categories -->
        <div class="space-y-8">
          <!-- Languages -->
          <div class="group">
            <div class="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">Languages</h3>
              </div>
              <div class="flex flex-wrap gap-3">
                <span v-for="lang in languages" :key="lang" 
                      class="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-300/30 rounded-full text-white font-medium hover:from-blue-500/30 hover:to-purple-500/30 transition-all cursor-default">
                  {{ lang }}
                </span>
              </div>
            </div>
          </div>

          <!-- Frameworks -->
          <div class="group">
            <div class="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14-7H5m14 14H5"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">Frameworks & Libraries</h3>
              </div>
              <div class="flex flex-wrap gap-3">
                <span v-for="framework in frameworks" :key="framework"
                      class="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 rounded-full text-white font-medium hover:from-purple-500/30 hover:to-pink-500/30 transition-all cursor-default">
                  {{ framework }}
                </span>
              </div>
            </div>
          </div>

          <!-- Tools -->
          <div class="group">
            <div class="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white group-hover:text-orange-300 transition-colors">Tools & Practices</h3>
              </div>
              <div class="flex flex-wrap gap-3">
                <span v-for="tool in tools" :key="tool"
                      class="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-300/30 rounded-full text-white font-medium hover:from-orange-500/30 hover:to-red-500/30 transition-all cursor-default">
                  {{ tool }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side: Interactive Tech Stack -->
        <div class="lg:sticky lg:top-24">
          <div class="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
            <h3 class="text-3xl font-bold text-white mb-8 text-center">Tech Stack</h3>

            <!-- Stats -->
            <div class="grid grid-cols-2 gap-4 text-center">
              <div class="backdrop-blur-sm bg-gradient-to-br from-blue-200/20 to-blue-500/20 rounded-xl p-4 border border-blue-300/30">
                <div class="text-3xl font-bold text-white mb-1">{{ totalSkills }}+</div>
                <div class="text-blue-200 text-sm font-medium">Technologies</div>
              </div>
              <div class="backdrop-blur-sm bg-gradient-to-br from-blue-200/20 to-blue-500/20 rounded-xl p-4 border border-purple-300/30">
                <div class="text-3xl font-bold text-white mb-1">2+</div>
                <div class="text-blue-200 text-sm font-medium">Years Experience</div>
              </div>
              <div class="backdrop-blur-sm bg-gradient-to-br from-blue-200/20 to-blue-500/20 rounded-xl p-4 border border-purple-300/30">
                <div class="text-3xl font-bold text-white mb-1">B.S</div>
                <div class="text-blue-200 text-sm font-medium">Cybersecurity & Information Assurance</div>
              </div>
              <div class="backdrop-blur-sm bg-gradient-to-br from-blue-200/20 to-blue-500/20 rounded-xl p-4 border border-purple-300/30">
                <div class="text-3xl font-bold text-white mb-1">3.95</div>
                <div class="text-blue-200 text-sm font-medium">Grade Point Average</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </appear>
        
  </appear>
</template>

<script setup>
import appear from '~/components/appear.vue';
import { ref, computed } from 'vue'

const languages = [
  'Python', 'JavaScript', 'TypeScript', 'Dart', 'SQL'
]

const frameworks = [
  'Vue.js', 'Nuxt 3', 'Flutter', 'TailwindCSS'
]

const tools = [
  'Firebase', 'Git', 'Linux', 'Scrum', 'Agile', 'Jira'
]

const techStack = [
  { name: 'Python', icon: '/public/py.png' },
  { name: 'JavaScript', icon: '/public/js.png' },
  { name: 'Vue.js', icon: '/public/vue.svg' },
  { name: 'Flutter', icon: '/public/flutter.png' },
  { name: 'TypeScript'},
  { name: 'Firebase'},
  { name: 'TailwindCSS'},
  { name: 'Git' }
]

const totalSkills = computed(() => {
  return languages.length + frameworks.length + tools.length
})
</script>