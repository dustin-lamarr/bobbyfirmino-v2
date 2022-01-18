<template>
  <div class="flex flex-row m-6 text-center transition ease-in duration-150 justify-center">
    <div
      class="
        table table-auto
        h-full
        mr-6
        ml-4
        w-auto
        font-mono
        border-2 border-b-0
      "
      :class="{
        'border-orange': home,
      }"
    >
      <div class="table-caption flex flex-row pb-2">2021-22 EPL Table</div>
      <div class="table-header-group">
        <div class="table-row text-sm text-center border-b-2">
          <div
            class="table-cell flex-initial border-b-2 px-2 py-1"
            :class="{
              'border-orange': home,
            }"
          >
            Club
          </div>
          <div
            class="table-cell flex-initial border-b-2 border-l-2 px-2"
            :class="{
              'border-orange': home,
            }"
          >
            MP
          </div>
          <div
            class="table-cell flex-initial border-b-2 border-l-2 px-2"
            :class="{
              'border-orange': home,
            }"
          >
            W
          </div>
          <div
            class="table-cell flex-initial border-b-2 border-l-2 px-2"
            :class="{
              'border-orange': home,
            }"
          >
            D
          </div>
          <div
            class="table-cell flex-initial border-b-2 border-l-2 px-2"
            :class="{
              'border-orange': home,
            }"
          >
            L
          </div>
          <div
            class="table-cell flex-initial border-b-2 border-l-2 px-2"
            :class="{
              'border-orange': home,
            }"
          >
            Pts
          </div>
        </div>
      </div>
      <div class="table-row-group">
        <div
          v-for="(club, id) in tableData"
          :key="id"
          class="table-row text-center text-sm"
        >
          <div
            class="
              table-cell
              flex-initial
              border-b-2 border-r-2 border-solid
              font-normal
              px-2
              py-1
            "
            :class="{
              'border-orange': home,
            }"
          >
            {{ club.short }}
          </div>
          <div
            class="
              table-cell
              flex-initial
              border-b-2 border-r-2 border-solid
              font-normal
              px-2
            "
            :class="{
              'border-orange': home,
            }"
          >
            {{ club.statistics.matches }}
          </div>
          <div
            class="
              table-cell
              flex-initial
              border-b-2 border-r-2 border-solid
              font-normal
              px-2
            "
            :class="{
              'border-orange': home,
            }"
          >
            {{ club.statistics.wins }}
          </div>
          <div
            class="
              table-cell
              flex-initial
              border-b-2 border-r-2 border-solid
              font-normal
              px-2
            "
            :class="{
              'border-orange': home,
            }"
          >
            {{ club.statistics.draws }}
          </div>
          <div
            class="
              table-cell
              flex-initial
              border-b-2 border-r-2 border-solid
              font-normal
              px-2
            "
            :class="{
              'border-orange': home,
            }"
          >
            {{ club.statistics.losses }}
          </div>
          <div
            class="
              table-cell
              flex-initial
              border-b-2 border-solid
              font-normal
              px-2
            "
            :class="{
              'border-orange': home,
            }"
          >
            {{ club.statistics.points }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tableData: {},
    home: Boolean,
  },
};
</script>
