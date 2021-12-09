<template>
  <div class="content-center flex-col">
    <table
      class="table-auto h-full mr-6 ml-4 w-auto font-mono border-2"
      :class="{
        'border-orange text-cream': this.home,
      }"
    >
      <caption class="flex-row pb-2">
        2021-22 EPL Table
      </caption>
      <thead>
        <tr class="flex-row text-sm">
          <th class="flex-initial border-2 border-s px-2 py-1">Club</th>
          <th class="flex-initial border-2 border-l-0 border-solid px-2">MP</th>
          <th class="flex-initial border-2 border-l-0 border-solid px-2">W</th>
          <th class="flex-initial border-2 border-l-0 border-solid px-2">D</th>
          <th class="flex-initial border-2 border-l-0 border-solid px-2">L</th>
          <th class="flex-initial border-2 border-l-0 border-solid px-2">
            Pts
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(club, id) in tableData"
          :key="id"
          class="flex-col text-center text-sm"
        >
          <td
            class="
              flex-initial
              border-b-2 border-l-2 border-r-2 border-solid
              font-normal
              px-2
              py-1
            "
          >
            {{ club.short }}
          </td>
          <td
            class="
              flex-initial
              border-b-2 border-l-2 border-r-2 border-solid
              font-normal
              px-2
            "
          >
            {{ club.statistics.matches }}
          </td>
          <td
            class="
              flex-initial
              border-b-2 border-l-2 border-r-2 border-solid
              font-normal
              px-2
            "
          >
            {{ club.statistics.wins }}
          </td>
          <td
            class="
              flex-initial
              border-b-2 border-l-2 border-r-2 border-solid
              font-normal
              px-2
            "
          >
            {{ club.statistics.draws }}
          </td>
          <td
            class="
              flex-initial
              border-b-2 border-l-2 border-r-2 border-solid
              font-normal
              px-2
            "
          >
            {{ club.statistics.losses }}
          </td>
          <td
            class="
              flex-initial
              border-b-2 border-l-2 border-r-2 border-solid
              font-normal
              px-2
            "
          >
            {{ club.statistics.points }}
          </td>
        </tr>
      </tbody>
    </table>
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
