<template>
  <div class="container">
    <!-- Gambar di tengah -->
    <img src="https://picsum.photos/300" alt="Random Image" class="image" />

    <!-- Tombol Like & Dislike -->
    <div class="buttons">
      <button
        :class="['btn', 'like-btn', { selected: selected === 'like' }]"
        @click="handleLike"
      >
        ❤️ Like ({{ likeCount }})
      </button>

      <button
        :class="['btn', 'dislike-btn', { selected: selected === 'dislike' }]"
        @click="handleDislike"
      >
        👎 Dislike ({{ dislikeCount }})
      </button>
    </div>

    <!-- Pesan -->
    <p class="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      likeCount: 0,
      dislikeCount: 0,
    };
  },
  computed: {
    message() {
      if (this.selected === "like") return "You liked this.";
      if (this.selected === "dislike") return "You disliked this.";
      return "No reaction yet.";
    },
  },
  methods: {
    handleLike() {
      if (this.selected !== "like") {
        this.likeCount++;
        if (this.selected === "dislike" && this.dislikeCount > 0) {
          this.dislikeCount--;
        }
        this.selected = "like";
      } else {
        this.likeCount--;
        this.selected = null;
      }
    },
    handleDislike() {
      if (this.selected !== "dislike") {
        this.dislikeCount++;
        if (this.selected === "like" && this.likeCount > 0) {
          this.likeCount--;
        }
        this.selected = "dislike";
      } else {
        this.dislikeCount--;
        this.selected = null;
      }
    },
  },
};
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 60px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.image {
  display: block;
  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.25);
}

.buttons {
  margin-top: 25px;
}

/* Tombol umum */
.btn {
  margin: 0 10px;
  padding: 12px 24px;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.25s ease;
  background-color: #e0e0e0;
  color: #333;
}

/* Efek hover */
.btn:hover {
  background-color: #d0d0d0;
}

/* Warna saat dipilih (selected) */
.like-btn.selected {
  background-color: #28a745; /* Hijau untuk Like */
  color: white;
  transform: scale(1.05);
}

.dislike-btn.selected {
  background-color: #dc3545; /* Merah untuk Dislike */
  color: white;
  transform: scale(1.05);
}

/* Pesan di bawah tombol */
.message {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  animation: fadeIn 0.4s ease;
}

/* Animasi lembut untuk teks */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
