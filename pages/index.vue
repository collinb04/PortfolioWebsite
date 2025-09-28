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
              <a href="/resume.pdf" download>
                <button class="outline outline-blue-600 rounded-full text-white font-medium py-2 px-4 m-2 hover:scale-110 transition-all duration-200">
                    Download CV
                </button>
              </a>
              <NuxtLink to="/#contact">
                <button class="bg-blue-600 text-white rounded-full font-medium py-2 px-4 m-2 hover:scale-110 transition-all duration-200">
                    Contact Me
                </button>
              </NuxtLink>
          </div>
          <div class="flex flex-row mt-4">
            <a href="https://www.linkedin.com/in/collin-brennan-078407273/">
                <img src="/public/linkedin.png" alt="LinkedIn" class="w-14 h-14 inline-block mr-2" />
            </a>
            <a href="https://github.com/collinb04">
                <img src="/public/github.png" alt="GitHub" class="w-14 h-14 inline-block mr-2" />
            </a>
          </div>
        </div>
      </div>
    </div>

  <appear>
    <div id="about" class="py-20">
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
              <h3 class="text-3xl font-bold text-white mb-8 text-center">Experience Stack</h3>

              <!-- Stats -->
              <div class="grid grid-rows-2 gap-4 text-center">
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
                <div class="backdrop-blur-sm bg-gradient-to-br from-blue-200/20 to-blue-500/20 rounded-xl p-4 border border-blue-300/30">
                  <div class="text-3xl font-bold text-white mb-1">{{ totalSkills }}+</div>
                  <div class="text-blue-200 text-sm font-medium">Technologies</div>
                </div>
                <div class="backdrop-blur-sm bg-gradient-to-br from-blue-200/20 to-blue-500/20 rounded-xl p-4 border border-purple-300/30">
                  <div class="text-3xl font-bold text-white mb-1">9</div>
                  <div class="text-blue-200 text-sm font-medium">Tech Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="projects" class="py-20">
  <!-- Header -->
  <div class="text-center mb-16">
    <h1 class="text-6xl font-bold bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 bg-clip-text text-transparent mb-6">
      Projects
    </h1>
    <div class="w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-200 mx-auto rounded-full"></div>
    <p class="text-blue-200 text-lg mt-6 max-w-2xl mx-auto">
      A collection of projects that showcase my journey as a developer
    </p>
  </div>

  <!-- Projects Grid -->
  <div class="max-w-7xl mx-auto px-4">
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <!-- Project Card 1 -->
      <div class="group backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
        <!-- Project Image -->
        <div class="relative overflow-hidden h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
          <div class="w-full h-full flex items-center justify-center">
            <img src="/public/EfWeb.png" alt="Project 1" class="w-82 text-blue-300" />
          </div>
          <!-- Overlay on hover -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <!-- Project Content -->
        <div class="p-6">
          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
            Full-Stack Web App
          </h3>
          <p class="text-blue-200 text-sm mb-4 leading-relaxed">
            A comprehensive web application built with Vue.js and Python backend, featuring user authentication/storage, and real-time data processing via tensorflow model.
          </p>
          
          <!-- Tech Stack Tags -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-blue-500/20 border border-blue-300/30 rounded-full text-blue-200 text-xs font-medium">Vue.js</span>
            <span class="px-3 py-1 bg-green-700/20 border border-green-500/30 rounded-full text-green-300 text-xs font-medium">Nuxt 3</span>
            <span class="px-3 py-1 bg-green-500/20 border border-green-300/30 rounded-full text-green-200 text-xs font-medium">Python</span>
            <span class="px-3 py-1 bg-purple-500/20 border border-purple-300/30 rounded-full text-purple-200 text-xs font-medium">Firebase</span>
          </div>
          
          <!-- Action Buttons -->
          <div class="flex gap-3">
            <a href="https://edgeforestry.com/#top">
              <button id="playButton" class="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-sm">
                Live Demo
              </button>
            </a>
            <button class="px-4 py-2 border border-blue-300/30 text-blue-300 font-medium rounded-lg hover:bg-blue-500/20 transition-all duration-300 text-sm">
              Code Owned by Edge Forestry
            </button>
          </div>
        </div>
      </div>

      <!-- Project Card 2 -->
      <div class="group backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
        <div class="relative overflow-hidden h-48 bg-gradient-to-br from-green-500/20 to-blue-500/20">
          <div class="w-full h-full flex items-center justify-center">
             <img 
                src="/raspi.png" 
                alt="screenshot of raspberry pi app" 
                class="w-100 h-90 object-full rounded-2xl transition-all duration-300 border border-white/10" 
              />
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div class="p-6">
          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
            Flutter Mobile App
          </h3>
          <p class="text-blue-200 text-sm mb-4 leading-relaxed">
            Flutter app designed for offline use and seamless user experience, with features such as usb watching and image extraction. The Python backend/TF model deploy real-time Oak Wilt detection results.
          </p>
          
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-blue-500/20 border border-blue-300/30 rounded-full text-blue-200 text-xs font-medium">Flutter</span>
            <span class="px-3 py-1 bg-blue-500/20 border border-blue-300/30 rounded-full text-blue-200 text-xs font-medium">Dart</span>
            <span class="px-3 py-1 bg-green-500/20 border border-green-300/30 rounded-full text-green-200 text-xs font-medium">Python</span>
          </div>
          
          <div class="flex justify-center">
            <button class="px-4 py-2 border border-green-300/30 text-green-300 font-medium rounded-lg hover:bg-green-500/20 transition-all duration-300 text-sm mt-5">
              Code Owned by Edge Forestry
            </button>
          </div>
        </div>
      </div>
    
      <!-- Project Card 4 -->
      <div class="group backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
        <div class="relative overflow-hidden h-48 bg-gradient-to-br from-orange-500/20 to-red-500/20">
          <div class="w-full h-full flex items-center justify-center">
            <svg class="w-16 h-16 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
            </svg>
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div class="p-6">
          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
            Cinematch
          </h3>
          <p class="text-blue-200 text-sm mb-4 leading-relaxed">
            Cinematch uses Letterboxd data to suggest films based on user preferences.
            Simply input your Letterboxd username to get personalized recommendations categorized by services you use.
          </p>
          
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-green-500/20 border border-green-300/30 rounded-full text-green-200 text-xs font-medium">Python</span>
            <span class="px-3 py-1 bg-blue-500/20 border border-blue-300/30 rounded-full text-blue-200 text-xs font-medium">Vue.js</span>
            <span class="px-3 py-1 bg-gray-500/20 border border-gray-300/30 rounded-full text-gray-200 text-xs font-medium">SQL</span>
          </div>
          
          <div class="flex gap-3 mt-9">
            <button class="flex-1 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 text-sm">
              Live Demo
            </button>
            <button class="px-4 py-2 border border-orange-300/30 text-orange-300 font-medium rounded-lg hover:bg-orange-500/20 transition-all duration-300 text-sm">
              Code
            </button>
          </div>
        </div>
      </div>

      <!-- Project Card 5 -->
      <div class="group backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
        <div class="relative overflow-hidden h-48 bg-gradient-to-br from-teal-500/20 to-cyan-500/20">
          <div class="w-full h-full flex items-center justify-center">
            <svg class="w-16 h-16 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
            </svg>
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div class="p-6">
          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
            Your Take
          </h3>
          <p class="text-blue-200 text-sm mb-4 leading-relaxed">
            Streamlined college football simulator AI model, allowing users to predict game outcomes using preferential weights for various statistics.
          </p>
          
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-green-500/20 border border-green-300/30 rounded-full text-green-200 text-xs font-medium">Python</span>
            <span class="px-3 py-1 bg-blue-500/20 border border-blue-300/30 rounded-full text-blue-200 text-xs font-medium">TypeScript</span>
            <span class="px-3 py-1 bg-purple-500/20 border border-purple-300/30 rounded-full text-purple-200 text-xs font-medium">REST API</span>
          </div>
          
          <div class="flex gap-3 mt-9">
            <button class="flex-1 px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-300 text-sm">
              Try It
            </button>
            <button class="px-4 py-2 border border-teal-300/30 text-teal-300 font-medium rounded-lg hover:bg-teal-500/20 transition-all duration-300 text-sm">
              Code
            </button>
          </div>
        </div>
      </div>

      <!-- Project Card 6 -->
      <div class="group backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
        <div class="relative overflow-hidden h-48 bg-gradient-to-br from-red-500/20 to-red-500/20">
          <div class="w-full h-full flex items-center justify-center">
            <svg class="w-16 h-16 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div class="p-6">
          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-red-300 transition-colors">
            Brix
          </h3>
          <p class="text-blue-200 text-sm mb-4 leading-relaxed">
            Brix revolutionizes education by utilizing AI as a tool rather than replacement. Abstract difficult topics, generate complex information maps, track progress, and learn to learn.
          </p>
          
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-blue-500/20 border border-blue-300/30 rounded-full text-blue-200 text-xs font-medium">Vue.js</span>
            <span class="px-3 py-1 bg-green-500/20 border border-green-300/30 rounded-full text-green-200 text-xs font-medium">Python</span>
            <span class="px-3 py-1 bg-gray-500/20 border border-gray-300/30 rounded-full text-gray-200 text-xs font-medium">PostgreSQL</span>
          </div>
          
          <div class="flex justify-center">
            <button class="px-4 py-2 border border-red-300/30 text-red-300 font-medium rounded-lg hover:bg-red-500/20 transition-all duration-300 text-sm mt-5">
              In Developement
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

    <div id="contact" class="py-20">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-6xl md:text-6xl font-bold bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 bg-clip-text text-transparent mb-6">
          Get In Touch
        </h1>
        <div class="w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-200 mx-auto rounded-full"></div>
        <p class="text-white/80 text-lg mt-6 max-w-2xl mx-auto">
          Ready to collaborate or just want to say hello? I'd love to hear from you.
        </p>
      </div>

      <!-- Contact Content -->
      <div class="max-w-6xl mx-auto px-4">
        <div class="justify-center items-center">
          
          <!-- Left: Contact Info -->
          <div class="space-y-8 max-w-xl mx-auto">
            <div class="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h3 class="text-2xl text-center font-semibold text-white mb-6">Let's Connect</h3>
              
              <!-- Contact Methods -->
              <div class="space-y-6">
                <!-- Email -->
                <a href="mailto:brenncol@mail.gvsu.edu" 
                  class="flex items-center group hover:translate-x-2 transition-all duration-300">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <div class="text-white font-medium group-hover:text-blue-300 transition-colors">Email</div>
                    <div class="text-white/60 text-sm">brenncol@mail.gvsu.edu</div>
                  </div>
                </a>

                <!-- LinkedIn -->
                <a href="https://www.linkedin.com/in/collin-brennan-078407273/" 
                  class="flex items-center group hover:translate-x-2 transition-all duration-300">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="text-white font-medium group-hover:text-blue-300 transition-colors">LinkedIn</div>
                    <div class="text-white/60 text-sm">Connect professionally</div>
                  </div>
                </a>

                <!-- GitHub -->
                <a href="https://github.com/collinb04" 
                  class="flex items-center group hover:translate-x-2 transition-all duration-300">
                  <div class="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="text-white font-medium group-hover:text-blue-300 transition-colors">GitHub</div>
                    <div class="text-white/60 text-sm">Check out my code</div>
                  </div>
                </a>
              </div>

              <!-- Response Time -->
              <div class="mt-8 p-4 backdrop-blur-sm bg-blue-500/10 rounded-xl border border-blue-300/20">
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <span class="text-blue-200 text-sm">Usually responds within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
     
        <!-- Footer Note -->
        <div class="text-center mt-16">
          <p class="text-white/60 text-lg">
            Open to new opportunities and interesting projects. Let's build something amazing together!
          </p>
        </div>
      </div>
    </div>

  </appear>
        
  </appear>
</template>

<script setup>
import appear from '~/components/appear.vue';
import { ref, computed, onMounted } from 'vue'

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