<template>
  <div class="pagination">
    <!-- 上一页 & 1 & ... -->
    <button
      :disabled="startNumAndEndNum.start == 1"
      @click="$emit('getPage', pageNo - 1)"
    >
      上一页
    </button>
    <button
      :class="{ active: 1 == pageNo }"
      v-if="startNumAndEndNum.start != 1"
      @click="$emit('getPage', 1)"
    >
      1
    </button>
    <button v-if="startNumAndEndNum.start - 1 > 1">···</button>

    <!-- 批量生产部分 -->
    <button
      :class="{ active: (page + offset) == pageNo }"
      v-for="(page, index) in (startNumAndEndNum.end - offset)"
      :key="index"
      @click="$emit('getPage', page + offset)"
    >
      {{ page + offset}}
    </button>

    <!-- ... & 最后一页 & 下一页 -->
    <button v-if="startNumAndEndNum.end + 1 < totalPage">···</button>
    <button
      :class="{ active: totalPage == pageNo }"
      v-if="startNumAndEndNum.end != totalPage"
      @click="$emit('getPage', totalPage)"
    >
      {{ totalPage }}
    </button>
    <button
      :disabled="startNumAndEndNum.end == totalPage"
      @click="$emit('getPage', pageNo + 1)"
    >
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ totalPage }} 页</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    startNumAndEndNum() {
      const { continues, pageNo, totalPage } = this;
      let start,
        end = 0;
      // 如果初始设定的页面数量多于总数量
      if (continues > totalPage) {
        start = 1;
        end = totalPage;
      } else {
        // 常规情况
        start = pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);
      }
      // 如果算出来的第一个数值小于开始页面
      if (start < 1) {
        start = 1;
        end = continues;
      }
      // 如果算出来的最后一个数值大于截至页面
      if (end > totalPage) {
        end = totalPage;
        start = totalPage - continues + 1;
      }
      return { start, end };
    },
    offset(){
      // 遍历偏移量
      return this.startNumAndEndNum.start - 1;
    }
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  .active{
    background-color: skyblue;
  }
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
